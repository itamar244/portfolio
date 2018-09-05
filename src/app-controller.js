import { query, queryAll } from './dom-utils';
import { changeLanguage, flushTexts, getCurLanguage } from './texts';
import { guard } from './utils';
import Router from './router';

const getLink = name => query(`.header__link[name=${name}]`);
const getLinks = () => queryAll('.header__link');
const getContent = name => query(`.content--${name}`);
const getActiveContent = () => query('.content.active');


function setPage() {
  const router = new Router({
    defaultPage: 'about',
    defaultParams: { lang: 'EN' },
    onPageChange: setPage,
  });

  const link = getLink(router.page);

  if (link != null) {
    guard(getActiveContent(), content => {
      content.classList.remove('active');
    });
    getContent(router.page).classList.add('active');
  }
}

export default function initApp() {
  changeLanguage(router.params.lang);
  flushTexts();

  setPage(router.page);

  getLinks().forEach(link => {
    link.addEventListener('click', () => {
      router.move(link.name);
    });
  });

  query('#language-select').addEventListener('click', () => {
    const nextLanguage = getCurLanguage() === 'EN' ? 'HE' : 'EN';
    router.setParam('lang', nextLanguage);
    changeLanguage(nextLanguage);
  });
}
