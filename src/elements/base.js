export class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.mounted = false;
    this.attachShadow({ mode: 'open' });
  }

  get(name) {
    return this.getAttribute(name);
  }

  connectedCallback() {
    this.render_();
    this.mounted = true;

    if (typeof this.onMount === 'function') {
      this.onMount();
    }
  }

  disconnectedCallback() {
    if (typeof this.onUnMount === 'function') {
      this.onUnMount();
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (typeof this.onUpdate === 'function') {
      this.onUpdate(attr, oldValue, newValue);
    }

    if (this.mounted) {
      this.clear_();
      this.render_();
    }
  }

  render_() {
    this.shadowRoot.append(this.render());
  }

  clear_() {
    const root = this.shadowRoot;
    if (root.firstChild != null) {
      root.removeChild(root.firstChild);
    }
  }
}

export function h(tag, props = {}, ...children) {
  const element = document.createElement(tag);

  for (const key in props) {
    if (key in element) {
      element[key] = props[key];
    } else {
      element.setAttribute(key, props[key]);
    }
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    element.appendChild(
      typeof child === 'string' ? document.createTextNode(child) : child,
    );
  }

  return element;
}
