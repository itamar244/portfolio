import { onDomLoaded, query, queryAll, removeElement } from './dom-utils';
import * as app from './app-controller';

import './styles/main.less';


onDomLoaded(() => {
  document.body.classList.add('ready');
  
  setTimeout(() => {
    removeElement(query('#loading'));
  }, 400);

  app.init();
});
