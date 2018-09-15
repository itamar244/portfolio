import { createVNode } from 'inferno';
import { loadCurLang, getText } from '../texts';

loadCurLang();

export default ({
  component: Tag = 'p',
  path,
  ...props,
}) => createVNode(1, Tag, null, getText(path), 0, {
  'data-text': path,
  ...props,
});
