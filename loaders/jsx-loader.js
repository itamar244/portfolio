const { transform } = require('@babel/core');

module.exports = function jsxLoader(source) {
  return transform(source, {
    filename: this.resourcePath,
    plugins: ['inferno'],
  }).code;
};
