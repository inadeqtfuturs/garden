import React from 'react';
import { Layout, SEO } from '@components';

export default function About() {
  return (
    <Layout>
      <SEO title="about" />
      <h2>
        about{' '}
        <span role="img" aria-label="seedling">
          🌱
        </span>
      </h2>
      <p>
        garden is an opinionated, batteries included boilerplate for md/x
        authoring with next.js. this initial version provides basic set up for
        writing mdx files, styling the garden, and testing components. here's
        the tech included:
      </p>
      <ul>
        <li>nextjs</li>
        <li>md/mdx authoring</li>
        <li>seo</li>
        <li>theme-ui - dark/light</li>
        <li>styled-components</li>
        <li>jest/github actions (ci/cd)</li>
        <li>storybook (for prototyping/templating)</li>
        <li>lint/prettier</li>
      </ul>
    </Layout>
  );
}
