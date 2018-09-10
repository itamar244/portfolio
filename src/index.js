import { onDomLoaded, query, queryAll, removeElement } from './dom-utils';
import initApp from './app-controller';

import './styles/main.less';

if (module.hot) {
  module.hot.accept(initApp);
}

onDomLoaded(() => {
  // location.hash = '';
  initApp();
  document.body.classList.add('ready');

  setTimeout(() => {
    query('#loading').remove();
  }, 400);
});
