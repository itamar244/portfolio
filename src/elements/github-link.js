import { BaseElement, h } from './base';

class GithubLink extends BaseElement {
  static get observedAttributes() {
    return ['href'];
  }

  render() {
    return h('a', {
        href: `https://github.com/itamar244${this.get('href') || ''}`
      },
      h('slot'),
    );
  }
}

customElements.define('iy-github-link', GithubLink);
