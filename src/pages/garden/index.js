import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import { Excerpt, Layout, SEO } from '@components';
import { getAllPosts } from '@utils';
import siteConfig from '@config';

const options = {
  keys: ['content', 'frontmatter.title', 'frontmatter.tags']
};

function Garden({ posts }) {
  const [postState, setPostState] = useState(posts);
  const [searchVal, setSearchVal] = useState('');
  const fuse = new Fuse(posts, options);

  useEffect(() => {
    if (searchVal) {
      const filteredPosts = fuse.search(searchVal).map(p => p.item);
      setPostState(filteredPosts);
    } else {
      setPostState(posts);
    }
  }, [searchVal]);

  const debounceQuery = debounce(val => setSearchVal(val), 333);
  const updateSearchVal = e => {
    const { value } = e.target;
    debounceQuery(value);
  };

  return (
    <Layout>
      <SEO title="🌱 garden" />
      <h2>garden</h2>
      <input value={searchVal} onChange={updateSearchVal} />
      {postState.map(post => (
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
