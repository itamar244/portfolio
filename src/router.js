export function curPage() {
  return location.hash.slice(1);
}

export function listenToRouter(listener) {
  window.addEventListener('popstate', () => listener(curPage()));
}

export function moveToPage(next, callback) {
  if (next !== curPage()) {
    history.pushState({}, '', `#${next}`);
    callback(next);
  }
}
