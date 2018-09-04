import { query, queryAll } from './dom-utils';
import { flushTexts } from './texts';
import { guard } from './utils';

const link = name => query(`.header__link[name=${name}]`);
const links = () => queryAll('.header__link');
const content = name => query(`.content--${name}`);
const activeContent = () => query('.content.active');
const curPage = () => location.hash.slice(1);


export function init() {
  if (location.hash.length <= 1) {
    location.href += '/#about';
  }

  flushTexts();

  setPage(curPage())

  links().forEach(link => {
    link.addEventListener('click', () => { moveToPage(link.name); });
  });

  window.addEventListener('popstate', event => { setPage(curPage()); })
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

export function moveToPage(next) {
  if (next !== curPage()) {
    history.pushState({}, '', `#${next}`);
    setPage(next);
  }
}
