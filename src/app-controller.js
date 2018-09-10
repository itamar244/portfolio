import { query, queryAll } from './dom-utils';
import { setLanguage, getCurLanguage } from './texts';
import { guard } from './utils';
import Router from './router';

const getLink = name => query(`.header [data-route=${name}]`);
const getLinks = () => queryAll('.header [data-route]');
const getContent = name => query(`.content--${name}`);
const getActiveContent = () => query('.content.active');

export default function initApp() {
  const header = query('.header');
  const router = new Router({
    defaultPage: '',
    defaultParams: { lang: 'EN' },
    initFirstRoute: true,
    onRouteChange: (route, isFirstRoute = true) => {
      if (!isFirstRoute) {
        header.classList.add('animate');
      }
      header.classList.toggle('fixed', route !== '');

      guard(getActiveContent(), content => {
        content.classList.remove('active');
      });
      if (route !== '') {
        getContent(route).classList.add('active');
      }
    },
  });

  query('.header').classList.toggle('fixed', router.route !== '');
  setLanguage(router.params.lang);

  getLinks().forEach(link => {
    link.addEventListener('click', () => {
      router.move(link.dataset.route);
    });
  });

  query('#open-ari').addEventListener('click', () => {
    import('./ari-repl').then(module => {
      module.default();
    });
  });

  // query('#language-select').addEventListener('click', () => {
  //   const nextLanguage = getCurLanguage() === 'EN' ? 'HE' : 'EN';
  //   router.setParam('lang', nextLanguage);
  //   setLanguage(nextLanguage);
  // });
}
