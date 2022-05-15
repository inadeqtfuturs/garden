import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Note, Post } from '@layouts';
import { Code } from '@components';
import { getPaths, getPageProps } from '@mdx';

const components = {
  pre: props => <div {...props} />,
  code: props => <Code {...props} />
};

function getComponent(type) {
  if (type === 'note') {
    return Note;
  }
  if (type === 'post') {
    return Post;
  }
  return Post;
}

export default function GardenPost({ frontmatter, mdx, meta }) {
  const { type } = frontmatter;
  const Component = useMemo(() => getComponent(type), [frontmatter]);

  return (
    <Component
      components={components}
      content={mdx}
      frontmatter={frontmatter}
      meta={meta}
      mentionedIn={meta?.mentionedIn}
    />
  );
}

GardenPost.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  mdx: PropTypes.object.isRequired
};

export async function getStaticPaths() {
  const paths = await getPaths();

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const props = await getPageProps(slug);

  return {
    props
  };
}
