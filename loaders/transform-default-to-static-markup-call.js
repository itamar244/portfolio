module.exports = ({ types: t }) => {
  let calledRenderToStaticMarkup = false;

  return {
    visitor: {
      Program: {
        exit(path, state) {
          if (calledRenderToStaticMarkup) {
            path.node.body.unshift(
              t.ImportDeclaration(
                [t.ImportSpecifier(
                  t.Identifier('renderToStaticMarkup'),
                  t.Identifier('renderToStaticMarkup'),
                )],
                t.StringLiteral('inferno-server'),
              ),
            );
          }
        },
      },

      ExportDefaultDeclaration({ node }) {
        calledRenderToStaticMarkup = true;
        node.declaration = t.BinaryExpression(
          '+',
          t.StringLiteral('<!DOCTYPE html>'),
          t.CallExpression(
            t.Identifier('renderToStaticMarkup'),
            [node.declaration],
          ),
        );
      },
    },
  };
};
