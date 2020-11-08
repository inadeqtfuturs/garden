import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@components';
import { slugifyTag } from '@utils/functions';

const Tag = styled.li`
  list-style: none;
  display: inline;
  &::before {
    content: ', ';
  }
  &:first-child::before {
    content: ': ';
  }
`;

const Wrapper = styled.ul`
  display: inline;
  padding: 0;
  margin: 0;
`;

function Tags({ tags }) {
  return (
    <Wrapper>
      tags
      {tags.sort().map(t => {
        const slug = slugifyTag(t);
        return (
          <Tag key={slug}>
            <Link href={`/tags/${slug}`}>{t}</Link>
          </Tag>
        );
      })}
    </Wrapper>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Tags;
