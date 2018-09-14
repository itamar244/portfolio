const { dirname, resolve, extname } = require('path');
const { readFileSync } = require('fs');
const babel = require('@babel/core');
const _eval = require('eval');
const { renderToStaticMarkup } = require('inferno-server');

const transform = (code, filename) => babel.transform(code, {
  filename,
  babelrc: false,
  plugins: [
    'inferno',
    'transform-es2015-modules-commonjs',
  ],
});

module.exports = function jsxToStringLoader(source) {
  const evalWithRequire = (code, filepath, addDependency) => {
    const dir = dirname(filepath);

    return _eval(code, this.resourcePath, {
      require: (path) => {
        if (path[0] !== '.' && path[0] !== '/') return require(path);

        let resolvedPath = resolve(dir, path);

        if (extname(path) === '') {
          resolvedPath += '.jsx';
        }

        const file = readFileSync(resolvedPath);
        const transpiled = transform(file, resolvedPath);

        this.addDependency(resolvedPath);

        return evalWithRequire(transpiled.code, resolvedPath);
      },
    });
  };
  const transpiled = transform(source, this.resourcePath);
  const module = evalWithRequire(transpiled.code, this.resourcePath);
  const html = module.__esModule === true ? module.default : module;
  const markup = renderToStaticMarkup(html);

  return `export default \`${markup}\`;`;
};
