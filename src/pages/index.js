import React from 'react';
import PropTypes from 'prop-types';
import { Excerpt, Layout, SEO } from '@components';
import { getAllPosts } from '@utils';
import siteConfig from '@config';

export default function Home({ recentPosts }) {
  return (
    <Layout>
      <SEO title="🌱 garden" />
      <h1>
        garden{' '}
        <span role="img" aria-label="seedling">
          🌱
        </span>
      </h1>
      <article>
        <p>opinionated boilerplate for your digital gardening</p>
        <ul>
          <li>mdx and next.js powered static site generation</li>
          <li>build relations between and among mdx files</li>
          <li>easy styling using theme-ui and styled-system</li>
        </ul>
      </article>
      <div>
        <h3>recent posts</h3>
        {recentPosts.map(post => (
          <Excerpt post={post} key={post.slug} />
        ))}
      </div>
    </Layout>
  );
}

Home.propTypes = {
  recentPosts: PropTypes.array
};

Home.defaultProps = {
  recentPosts: []
};

export async function getStaticProps() {
  const { content } = siteConfig;
  const posts = await getAllPosts(content);
  const recentPosts = posts.slice(0, 4);
  return {
    props: {
      recentPosts
    }
  };
}
