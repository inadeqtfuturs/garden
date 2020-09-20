import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const Inner = styled.a`
  text-decoration: none;
  border: none;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    &:hover {
      color: ${theme.colors.text};
      background-color: transparent;
    }
  `}
`;

function GardenLink({ href, as, children }) {
  return (
    <Link href={href} as={as} passHref>
      <Inner>{children}</Inner>
    </Link>
  );
}

GardenLink.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  children: PropTypes.any.isRequired
};

GardenLink.defaultProps = {
  as: undefined
};

export default GardenLink;
