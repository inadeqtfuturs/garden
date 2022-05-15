import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import styled, { css } from 'styled-components';
import { Excerpt, Layout, SEO } from '@components';
import { getPages } from '@mdx';

const options = {
  keys: [
    'content',
    'frontmatter.title',
    'frontmatter.tags',
    'frontmatter.description'
  ]
};

const StyledInput = styled.input`
  font-size: 18px;
  border: none;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.text};
    &:hover,
    &:focus {
      outline: none;
      border-bottom: 1px solid ${theme.colors.primary};
    }
  `}
`;

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
      <StyledInput
        type="search"
        placeholder="search..."
        onChange={updateSearchVal}
      />
      {postState.map(post => (
        <Excerpt post={post} key={post.filepath} />
      ))}
    </Layout>
  );
}

Garden.propTypes = {
  posts: PropTypes.array.isRequired
};

export async function getStaticProps() {
  const posts = await getPages();
  const sortedPosts = posts.sort(
    ({ frontmatter: { date: a } }, { frontmatter: { date: b } }) =>
      new Date(b) - new Date(a)
  );

  return {
    props: {
      posts: sortedPosts
    }
  };
}

export default Garden;
