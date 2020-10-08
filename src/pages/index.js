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
        <p style={{ fontSize: '1.125rem' }}>
          <span role="img" aria-label="waving hand">
            👋
          </span>
          hi. welcome to digital-garden.dev, where i'm building (and writing
          about building) a next.js powered digital garden starter. 'garden' is
          opinionated boilerplate for your digital gardening. check out the{' '}
          <a
            href="https://github.com/inadeqtfuturs/garden"
            style={{ fontSize: '1.125rem' }}
          >
            repo
          </a>
          , and read about some of the motivations for building garden below.
        </p>
        <p style={{ fontSize: '1.125rem' }}>
          here are some of the things garden does out of the box:
        </p>
        <ul style={{ fontSize: '1.125rem' }}>
          <li>mdx and next.js powered static site generation</li>
          <li>build relations between and among mdx files</li>
          <li>easy styling using theme-ui and styled-system</li>
        </ul>
        <p style={{ fontSize: '1.125rem' }}>
          here are some of the things coming soon:
        </p>
        <ul style={{ fontSize: '1.125rem' }}>
          <li>search and tag filtering</li>
          <li>
            source content from different sources and render with related
            templates
          </li>
          <li>cli for scaffolding content</li>
        </ul>
      </article>
      <div>
        <h2>recent posts</h2>
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
