import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Tags } from '@components';

const PostExcerpt = styled.div`
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-radius: 6px;
  h3 {
    margin: 0;
  }
  small {
    text-transform: uppercase;
  }
`;

function Excerpt({ post }) {
  const {
    frontmatter: { title, date, description, tags },
    params: { slug }
  } = post;
  return (
    <PostExcerpt>
      <small>{date}</small>
      <Link href={`/${slug.join('/')}`} passHef>
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <Tags tags={tags} />
    </PostExcerpt>
  );
}

Excerpt.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired
    }).isRequired,
    params: PropTypes.shape({
      slug: PropTypes.array.isRequired
    }).isRequired
  }).isRequired
};

export default Excerpt;
