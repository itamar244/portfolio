import onDomLoaded from './on-dom-loaded';
import { attachTextToElements } from './texts';

import './styles/main.less';


onDomLoaded(() => {
  attachTextToElements(document.querySelectorAll('[data-text]'));

  document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
      if (!link.classList.contains('active')) {
        document.querySelector('.header__link.active').classList.remove('active');
        document.querySelector('.content.active').classList.remove('active');
        link.classList.add('active');
        document.querySelector(`.content--${link.name}`).classList.add('active');
      }
    });
  });
});
