export function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

export function guard(val, operation) {
  if (val != null) {
    operation(val);
  }
}
