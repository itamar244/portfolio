export function query(selectors, parent = document) {
  return parent.querySelector(selectors);
}

export function queryAll(selectors, parent = document) {
  return parent.querySelectorAll(selectors);
}


export function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  for (const key in props) {
    element.setAttribute(key, props[key]);
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    element.appendChild(
      typeof child === 'string'
      ? document.createTextNode(child)
      : Array.isArray(child)
      ? createElement(...child)
      : child
    );
  }

  return element;
}

export function removeElement(element) {
  if (element != null && element.parentElement != null) {
    element.parentElement.removeChild(element);
  }
}

export function onDomLoaded(callback) {
  if (document.readyState === 'completed') {
    callback();
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      callback();
    });
  }
}

export function on(_elements, type, listener) {
  const elements = Array.isArray(_elements) ? _elements : [_elemenets];

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(type, listener);
  }

  return () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener(type, listener);
    }
  };
}
