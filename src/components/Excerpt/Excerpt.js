import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { alpha } from '@theme-ui/color';
import { Link, Tags } from '@components';

const PostExcerpt = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 6px;
  small {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    ${({ theme }) => css`
      background-color: ${alpha(theme.colors.accent, 0.2)};
    `}
  }
`;

function Excerpt({ post }) {
  const {
    frontMatter: { title, date, description, slug, tags }
  } = post;
  return (
    <Link href="/garden/[slug]" as={slug}>
      <PostExcerpt>
        <small>{date}</small>
        <h3>{title}</h3>
        <p>{description}</p>
        <Tags tags={tags} />
      </PostExcerpt>
    </Link>
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
