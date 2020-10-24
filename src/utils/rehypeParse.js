const visit = require('unist-util-visit');

module.exports = () => tree => {
  visit(tree, 'element', node => {
    const { tagName } = node;
    if (tagName !== 'blockquote');
  });

  return tree;
};
