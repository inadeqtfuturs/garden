import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Tags } from '@components';

const PostExcerpt = styled.div`
  margin-bottom: 2rem;
  p {
    margin: 0;
  }
`;

function Excerpt({ post }) {
  const {
    frontMatter: { title, description, slug, tags }
  } = post;
  return (
    <PostExcerpt>
      <h3>
        <Link href="/garden/[slug]" as={slug}>
          {title}
        </Link>
      </h3>
      <p>{description}</p>
      <Tags tags={tags} />
    </PostExcerpt>
  );
}

Excerpt.propTypes = {
  post: PropTypes.shape({
    frontMatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired
    }).isRequired
  }).isRequired
};

export default Excerpt;
