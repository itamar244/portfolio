import { onDomLoaded, query, queryAll, removeElement } from './dom-utils';
import { flushTexts } from './texts';

import './styles/main.less';

const links = () => queryAll('.header__link');
const activeLink = () => query('.header__link.active');
const content = name => query(`.content--${name}`);
const activeContent = () => query('.content.active');

onDomLoaded(() => {
  document.body.classList.add('ready');
  setTimeout(() => {
    removeElement(query('#loading'));
  }, 400);
  flushTexts();

  content(activeLink().name).classList.add('active');

  links().forEach(link => {
    link.addEventListener('click', () => {
      if (!link.classList.contains('active')) {
        activeLink().classList.remove('active');
        activeContent().classList.remove('active');
        link.classList.add('active');
        content(link.name).classList.add('active');
      }
    });
  });
});
