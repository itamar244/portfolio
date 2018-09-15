const { transform, types: t } = require('@babel/core');

module.exports = function jsxToStringLoader(source) {
  return transform(source, {
    filename: this.resourcePath,
    plugins: ['./loaders/transform-default-to-static-markup-call', 'inferno'],
  }).code;
};
