import React from 'react';
import PropTypes from 'prop-types';
import hydrate from 'next-mdx-remote/hydrate';
import { Note, Post } from '@layouts';
import { Code } from '@components';
import { getAllPaths, getAllPosts } from '@utils';
import siteConfig from '@config';

const components = {
  pre: props => <div {...props} />,
  code: props => <Code {...props} />
};

export default function GardenPost({ mdxSource, frontMatter }) {
  const { mentionedIn, type } = frontMatter;
  const content = hydrate(mdxSource, { components });

  return (
    <>
      {type === 'note' && (
        <Note
          content={content}
          frontMatter={frontMatter}
          mentionedIn={mentionedIn}
        />
      )}
      {type === 'post' && (
        <Post
          content={content}
          frontMatter={frontMatter}
          mentionedIn={mentionedIn}
        />
      )}
    </>
  );
}

GardenPost.propTypes = {
  mdxSource: PropTypes.object.isRequired,
  frontMatter: PropTypes.object.isRequired
};

export async function getStaticPaths() {
  const { content } = siteConfig;
  const routes = await getAllPaths(content);

  const paths = routes.map(({ path, slug }) => ({
    params: {
      path,
      slug
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content } = siteConfig;
  const posts = await getAllPosts(content);
  const [blogPost] = posts.filter(post => post.slug === slug);

  if (!blogPost) {
    // eslint-disable-next-line no-console
    console.warn(`No content found for slug ${slug}`);
  }

  return {
    props: {
      mdxSource: blogPost.mdx,
      frontMatter: blogPost.frontMatter
    }
  };
}
