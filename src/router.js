export default class Router {
  constructor(options = {}) {
    this.query_ = '';
    this.options_ = options;
    this.flushData_();

    window.addEventListener('popstate', () => {
      const prevRoute = this.route;
      this.flushData_();
      this.emit_(prevRoute);
    });

    if (options.initFirstRoute) {
      setTimeout(() => {
        this.emit_(this.route, true);
      });
    }
  }

  get route() {
    return this.route_ !== '' ? this.route_ : this.options_.defaultPage;
  }

  get params() {
    if (this.params_ === null) this.flushData_();
    return Object.assign({}, this.options_.defaultParams, this.params_);
  }

  move(next, force = false) {
    const currentRoute = this.route;
    if (next !== currentRoute || force) {
      history.pushState(
        {},
        '',
        `#${next}${this.query_ !== '' ? `?${this.query_}` : ''}`,
      );
      this.route_ = next;
      this.emit_(currentRoute);
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

    this.move(this.route_,  true);
  }

  emit_(prevRoute, isFirstRoute) {
    if (this.options_.onRouteChange != null) {
      this.options_.onRouteChange(this.route, prevRoute, !!isFirstRoute);
    }
  }

  flushData_() {
    const { hash } = location;
    const routeItems = hash.split('?', 2);

    this.route_ = routeItems[0].slice(1);
    this.query_ = routeItems[1] || '';
    this.params_ = {};

    if (routeItems.length === 2) {
      const slices = routeItems[1].split('&');
      for (let i = 0; i < slices.length; i++) {
        const items = slices[i].split('=', 2);
        this.params_[items[0]] = items[1];
      }
    }
  }
}
