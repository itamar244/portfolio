import { onDomLoaded, query, queryAll, removeElement } from './dom-utils';
import initApp from './app-controller';

import './styles/main.less';

if (module.hot) {
  module.hot.accept(initApp);
}

onDomLoaded(() => {
  document.body.classList.add('ready');
  initApp();

  setTimeout(() => {
    removeElement(query('#loading'));
  }, 400);
});
