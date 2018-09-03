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
