export default class Router {
  constructor(options = {}) {
    this.query_ = '';
    this.options_ = options;
    this.flushData_();

    window.addEventListener('popstate', () => {
      this.flushData_();
      this.emit_();
    });
  }

  get page() {
    return this.page_ !== '' ? this.page_ : this.options_.defaultPage;
  }

  get params() {
    if (this.params_ === null) this.flushData_();
    return Object.assign({}, this.options_.defaultParams, this.params_);
  }

  move(next, force = false) {
    if (next !== this.page || force) {
      history.pushState(
        {},
        '',
        `#${next}${this.query_ !== '' ? `?${this.query_}` : ''}`,
      );
      this.page_ = next;
      this.emit_();
    }
  }

  setParam(key, value) {
    this.params_[key] = value;

    const params = this.params;
    if (key in params) {
      this.query_ = Object.keys(this.params_).reduce((query, key, i) => (
        `${query}${(i !== 0 ? '&' : '')}${key}=${params[key]}`
      ), '');
    } else {
      this.query_ += `${this.query_.length > 0 ? '&' : ''}${key}=${value}`;
    }

    this.move(this.page_,  true);
  }

  emit_() {
    if (this.options_.onPageChange != null) {
      this.options_.onPageChange();
    }
  }

  flushData_() {
    const { hash } = location;
    const pageItems = hash.split('?', 2);

    this.page_ = pageItems[0].slice(1);
    this.query_ = pageItems[1] || '';
    this.params_ = {};

    if (pageItems.length === 2) {
      const slices = pageItems[1].split('&');
      for (let i = 0; i < slices.length; i++) {
        const items = slices[i].split('=', 2);
        this.params_[items[0]] = items[1];
      }
    }

  }
}
