import React from 'react';
import PropTypes from 'prop-types';
import { Excerpt, Layout, SEO } from '@components';
import { getPages, getPathsByProp } from '@mdx';

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
  const paths = await getPathsByProp('frontmatter.tags');
  const test = paths.map(p => ({ params: { slug: p } }));

  return {
    paths: test,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const tagNoDash = slug.replace('-', ' ');
  const posts = await getPages({
    frontmatter: { draft: null, tags: slug }
  });
  const postsNoDash = await getPages({
    frontmatter: { draft: null, tags: tagNoDash }
  });

  const allPosts = [...posts, ...postsNoDash];

  const uniquePosts = Array.from(
    new Set(allPosts.map(a => a?.frontmatter?.title))
  ).map(d => allPosts.find(p => p?.frontmatter?.title === d));

  return {
    props: {
      tag: slug,
      posts: uniquePosts
    }
  };
}
