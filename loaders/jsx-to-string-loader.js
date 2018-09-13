const { dirname, resolve } = require('path');
const { readFileSync } = require('fs');
const { transform } = require('@babel/core');
const _eval = require('eval');
const { renderToStaticMarkup } = require('react-dom/server');

module.exports = function jsxToStringLoader(source) {
  const evalWithRequire = (code, filepath, addDependency) => {
    const dir = dirname(filepath);

    return _eval(code, this.resourcePath, {
      require: (path) => {
        if (path[0] !== '.' && path[0] !== '/') return require(path);

        const resolvedPath = resolve(dir, path) + '.jsx';
        const file = readFileSync(resolvedPath);
        const transpiled = transform(file, { filename: resolvedPath });

        this.addDependency(resolvedPath);

        return evalWithRequire(transpiled.code, resolvedPath);
      },
    });
  };
  const transpiled = transform(source, { filename: this.resourcePath });
  const module = evalWithRequire(transpiled.code, this.resourcePath);
  const html = module.__esModule === true ? module.default : module;
  const markup = renderToStaticMarkup(html);

  return `export default \`${markup}\`;`;
};
