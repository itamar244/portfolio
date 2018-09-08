import { onDomLoaded, query, queryAll, removeElement } from './dom-utils';
import initApp from './app-controller';

import './styles/main.less';

if (module.hot) {
  module.hot.accept(initApp);
}

const elementsLoadPromise = new Promise(resolve => {
  if (!('CustomElementRegistry' in window)) {
    import('@webcomponents/custom-elements').then(() => {
      import(/* webpackMode: 'eager' */'./elements').then(resolve);
      resolve();
    });
  } else {
    import(/* webpackMode: 'eager' */'./elements').then(resolve);
  }
});

onDomLoaded(() => {
  document.body.classList.add('ready');
  elementsLoadPromise.then(initApp);

  setTimeout(() => {
    removeElement(query('#loading'));
  }, 400);
});
