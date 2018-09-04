import { query, queryAll } from './dom-utils';
import { flushTexts } from './texts';
import { guard } from './utils';
import * as router from './router';

const link = name => query(`.header__link[name=${name}]`);
const links = () => queryAll('.header__link');
const content = name => query(`.content--${name}`);
const activeContent = () => query('.content.active');

export function init() {
  if (location.hash.length <= 1) {
    location.href += '/#about';
  }

  flushTexts();

  setPage(router.curPage())

  links().forEach(link => {
    link.addEventListener('click', () => {
      router.moveToPage(link.name, setPage);
    });
  });

  router.listenToRouter(setPage);
}

export function setPage(next) {
  const link = query(`.header__link[name=${next}]`);

  if (link != null) {
    guard(activeContent(), content => {
      content.classList.remove('active');
    })
    content(next).classList.add('active');
  }
}
