import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@components';

const Tag = styled.li`
  list-style: none;
  &::before {
    content: ', ';
  }
  &:first-child::before {
    content: ': ';
  }
`;

const Wrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

function Tags({ tags }) {
  return (
    <Wrapper>
      tags
      {tags
        .sort((a, b) => a - b)
        .map(t => (
          <Tag key={t}>
            <Link href="/garden/tags/[slug]" as={`/garden/tags/${t}`}>
              {t}
            </Link>
          </Tag>
        ))}
    </Wrapper>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Tags;
