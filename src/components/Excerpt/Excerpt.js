import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Tags } from '@components';

const PostExcerpt = styled.div`
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-radius: 6px;
  small {
    text-transform: uppercase;
  }
`;

function Excerpt({ post }) {
  const {
    frontMatter: { title, date, description, slug, tags }
  } = post;
  return (
    <PostExcerpt>
      <small>{date}</small>
      <Link href={slug}>
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <Tags tags={tags} />
    </PostExcerpt>
  );
}

Excerpt.propTypes = {
  post: PropTypes.shape({
    frontMatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired
    }).isRequired
  }).isRequired
};

export default Excerpt;
