import { createRepl } from 'ari-math';
import { query, createElement, on } from './dom-utils';

export default function initRepl() {
  function getResult(input) {
    try {
      return repl.run(input).toString();
    } catch (e) {
      const result = document.createElement('span');
      result.className = 'repl__error';
      result.textContent = e.message;
      return result;
    }
  }

  const repl = createRepl();
  const replContainer = query('#repl-template').content.cloneNode(true);
  const root = replContainer.children[0];
  const history = query('.repl__history', root);
  const field = query('.repl__input', root);

  field.addEventListener('keydown', event => {
    if (event.key === 'Enter' && field.value !== '') {
      history.append(field.value);

      history.append(' -> ', getResult(field.value), '\n');
      field.value = '';
      root.scroll(0, root.scrollHeight - root.clientHeight);
    }
  });

  query('#root').appendChild(replContainer);
  field.focus();
  
  on(
    [query('.repl__close', root), query('.repl__background', root)],
    'click',
    () => { root.remove(); },
  );
}
