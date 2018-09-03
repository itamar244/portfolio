import { attachTextToElements } from './texts';
import { onDomLoaded, query, queryAll, removeElement } from './dom-utils';

import './styles/main.less';

const links = () => queryAll('.header__link');
const activeLink = () => query('.header__link.active');
const content = (name) => query(`.content--${name}`);

onDomLoaded(() => {
  attachTextToElements(queryAll('[data-text]'));
  document.body.classList.add('ready');
  setTimeout(() => {
    removeElement(query('#loading'));
  }, 400);

  const activeLinkName = activeLink().name;
  content(activeLinkName).classList.add('active');

  links().forEach(link => {
    link.addEventListener('click', () => {
      if (!link.classList.contains('active')) {
        activeLink().classList.remove('active');
        query('.content.active').classList.remove('active');
        link.classList.add('active');
        content(link.name).classList.add('active');
      }
    });
  });
});
