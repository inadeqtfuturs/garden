import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { alpha } from '@theme-ui/color';
import { Link } from '@components';
import { slugifyTag } from '@utils/functions';

const Tag = styled.li`
  list-style: none;
  a {
    border: 1px solid transparent;
    margin-right: 0.25rem;
    padding: 0.25rem;
    border-radius: 6px;
    ${({ theme }) => css`
      background-color: ${alpha(theme.colors.text, 0.05)};
      &:hover,
      &:focus {
        background: ${alpha(theme.colors.primary, 0.2)};
        border: 1px solid ${theme.colors.primary};
      }
    `}
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
