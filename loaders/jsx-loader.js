const { transform } = require('@babel/core');

module.exports = function jsxLoader(source) {
  return transform(source, {
    filename: this.resourcePath,
    babelrc: false,
    plugins: ['inferno'],
  }).code;
};
