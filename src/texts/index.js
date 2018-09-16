import { isObject } from '../utils';

const LANGUAGES = {
  'EN': 'ltr',
  'HE': 'rtl',
};
const TEXTS = {};
let curLang = 'EN';

export function getCurLanguage() {
  return curLang;
}

export function getText(path) {
  const paths = path.split('.');
  let value = TEXTS[curLang];

  for (let i = 0; i < paths.length && isObject(value); i++) {
    value = value[paths[i]];
  }

  return typeof value === 'string' ? value : '';
}

export function loadCurLang() {
  if (!(curLang in TEXTS)) {
    TEXTS[curLang] = require(`./${curLang}.yaml`);
  }
}

export function attachTextToElements(elements) {
  loadCurLang();
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.textContent = getText(element.dataset.text);
  }
}

export function flushTexts() {
  document.documentElement.lang = curLang.toLowerCase();
  document.body.classList.add(`lang--${curLang}`);
  document.documentElement.dir = LANGUAGES[curLang];
  attachTextToElements(document.querySelectorAll('[data-text]'));
}

export function setLanguage(next) {
  curLang = next;
  flushTexts();
}
