/* eslint-disable no-param-reassign */
const visit = require('unist-util-visit');
const tocUtil = require('mdast-util-toc');
const get = require('lodash/get');

const addClass = (node, classes = []) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};
  node.data.hProperties.className = node.data.hProperties.className || [];

  node.data.hProperties.className.push(...classes);
};

const genOverview = map => {
  const header = {
    type: 'heading',
    depth: 3,
    children: [{ type: 'text', value: 'overview' }]
  };

  return {
    type: 'parent',
    children: [header, map],
    data: {
      hProperties: { className: 'toc' }
    }
  };
};

// eslint-disable-next-line no-unused-vars
function parse(options = {}) {
  function transformer(tree) {
    visit(tree, 'blockquote', node => {
      const val = get(node, 'children[0].children[0].value', '');
      if (val.substring(0, 2) !== '=>') {
        return;
      }
      const calloutClass = val.substring(3);
      addClass(node, ['callout', calloutClass]);
      node.children.shift();
    });
    const { map } = tocUtil(tree);
    if (map && map.children.length > 1) {
      const overview = genOverview(map);
      tree.children = [].concat(overview, tree.children);
    }
  }

  return transformer;
}

module.exports = parse;
