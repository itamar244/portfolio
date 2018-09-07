import { query, queryAll } from './dom-utils';
import { attachTextToElements, setLanguage, getCurLanguage } from './texts';
import { guard } from './utils';
import Router from './router';

const getLink = name => query(`.header__link[name=${name}]`);
const getLinks = () => queryAll('.header__link');
const getContent = () => query('.content');
const getPageTemplate = page => query(`#page-${page}`);

export default function initApp() {
  const router = new Router({
    defaultPage: 'about',
    defaultParams: { lang: 'EN' },
    initFirstRoute: true,
    onRouteChange: route => {
      const content = getContent();
      const newContent = getPageTemplate(route).content.cloneNode(true);

      attachTextToElements(queryAll('[data-text]', newContent));

      if (content !== null) {
        content.parentElement.replaceChild(newContent, content);
      } else {
        query('#root').appendChild(newContent);
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
