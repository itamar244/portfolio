import { query, queryAll } from './dom-utils';
import { setLanguage, getCurLanguage } from './texts';
import { guard } from './utils';
import Router from './router';

const getLink = name => query(`.header__link[name=${name}]`);
const getLinks = () => queryAll('.header__link');
const getContent = name => query(`.content--${name}`);
const getActiveContent = () => query('.content.active');

export default function initApp() {
  const router = new Router({
    defaultPage: 'about',
    defaultParams: { lang: 'EN' },
    initFirstRoute: true,
    onRouteChange: route => {
      const link = getLink(route);

      if (link != null) {
        guard(getActiveContent(), content => {
          content.classList.remove('active');
        });
        getContent(route).classList.add('active');
      }
    },
  });

  setLanguage(router.params.lang);

  getLinks().forEach(link => {
    link.addEventListener('click', () => {
      router.move(link.name);
    });
  });

  query('#language-select').addEventListener('click', () => {
    const nextLanguage = getCurLanguage() === 'EN' ? 'HE' : 'EN';
    router.setParam('lang', nextLanguage);
    setLanguage(nextLanguage);
  });
}
