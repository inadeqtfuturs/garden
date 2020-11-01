import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { alpha } from '@theme-ui/color';

const Inner = styled.a`
  text-decoration: none;
  border: none;
  ${({ theme }) => css`
    color: ${alpha(theme.colors.text, 0.8)};
    &:hover {
      color: ${theme.colors.text};
      background-color: transparent;
    }
  `}
`;

function GardenLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <Inner>{children}</Inner>
    </Link>
  );
}

GardenLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default GardenLink;
