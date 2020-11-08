import React from 'react';
import PropTypes from 'prop-types';
import { Excerpt, Layout, SEO } from '@components';
import { getAllPosts } from '@utils';
import { slugifyTag } from '@utils/functions';
import siteConfig from '@config';

export default function TagIndex({ posts, tag }) {
  return (
    <Layout>
      <SEO title={`posts tagged ${tag.replace(/-/g, ' ')}`} />
      <h2>posts tagged '{tag.replace(/-/g, ' ')}'</h2>
      {posts.map(post => (
        <Excerpt post={post} key={post.slug} />
      ))}
    </Layout>
  );
}

TagIndex.propTypes = {
  posts: PropTypes.array,
  tag: PropTypes.string.isRequired
};

TagIndex.defaultProps = {
  posts: []
};

export async function getStaticPaths() {
  const { content } = siteConfig;
  const posts = await getAllPosts(content);
  const blogTags = posts.reduce((acc, { frontMatter: { tags } }) => {
    const newTags = tags.reduce((newAcc, tag) => {
      const slug = slugifyTag(tag);
      if (acc.includes(slug)) {
        return newAcc;
      }
      return [...newAcc, slug];
    }, []);
    return [...acc, ...newTags];
  }, []);
  const paths = blogTags.map(slug => ({
    params: {
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
  const blogPosts = posts.filter(post =>
    post.frontMatter.tags.map(t => slugifyTag(t)).includes(slug)
  );

  if (!blogPosts) {
    // eslint-disable-next-line no-console
    console.warn(`No content found for tag ${slug}`);
  }

  return {
    props: {
      posts: blogPosts,
      tag: slug
    }
  };
}
