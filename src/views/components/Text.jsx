import { createElement } from 'inferno-create-element';
import { loadCurLang, getText } from '../../texts';

loadCurLang();

export default ({
  component: Tag = 'p',
  path,
  ...props,
}) => createElement(Tag, { 'data-text': path, ...props }, getText(path));
