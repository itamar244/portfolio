import { isObject } from '../utils';
// force joinin the EN data to the main build
import './EN.yaml';

let curLang = 'EN';
const TEXTS = {};

export function getText(path) {
  const paths = path.split('.');
  let value = TEXTS[curLang];

  for (let i = 0; i < paths.length && isObject(value); i++) {
    value = value[paths[i]];
  }

  return typeof value === 'string' ? value : '';
}

export function loadCurLang(maybeCallback) {
  if (!(curLang in TEXTS)) {
    return import(`./${curLang}.yaml`).then(module => {
      TEXTS[curLang] = module.default;
    });
  }

  return Promise.resolve();
}

export function attachTextToElements(elements) {
  loadCurLang().then(() => {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.textContent = getText(element.dataset.text);
    }
  });
}

export function flushTexts() {
  document.documentElement.lang = curLang.toLowerCase();
  document.body.classList.add(`lang--${curLang}`);
  attachTextToElements(document.querySelectorAll('[data-text]'));
}
