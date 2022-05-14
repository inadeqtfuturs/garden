import visit from 'unist-util-visit';

function parse() {
  function blockquote(tree) {
    visit(tree, 'element', node => {
      const { tagName } = node;
      if (tagName !== 'blockquote');
    });

    return tree;
  }

  return blockquote;
}

export default parse;
