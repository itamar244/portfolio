export default function onDomLoaded(callback) {
  if (document.readyState === 'completed') {
    callback();
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      callback();
    });
  }
}
