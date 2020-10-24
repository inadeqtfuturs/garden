/* eslint-disable no-param-reassign */
const visit = require('unist-util-visit');
const get = require('lodash/get');

const testNode = (node, calloutClass) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};
  node.data.hProperties.className = node.data.hProperties.className || [];

  node.children.shift();
  node.data.hProperties.className.push('callout', calloutClass);
};

module.exports = () => tree => {
  visit(tree, 'blockquote', node => {
    const val = get(node, 'children[0].children[0].value', '');
    if (val.substring(0, 2) !== '=>') {
      return;
    }
    const calloutClass = val.substring(3);
    node = testNode(node, calloutClass);
  });
};
