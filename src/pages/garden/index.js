import React from 'react';
import PropTypes from 'prop-types';
import { Excerpt, Layout, SEO } from '@components';
import { getAllPosts } from '@utils';
import siteConfig from '@config';

function Garden({ posts }) {
  return (
    <Layout>
      <SEO title="🌱 garden" />
      <h2>garden</h2>
      {posts.map(post => (
        <Excerpt post={post} key={post.slug} />
      ))}
    </Layout>
  );
}

Garden.propTypes = {
  posts: PropTypes.array.isRequired
};

export async function getStaticProps() {
  const { content } = siteConfig;
  const posts = await getAllPosts(content);

  return {
    props: {
      posts
    }
  };
}

export default Garden;
