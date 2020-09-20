import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from '@components';

const Nav = styled.nav`
  ${({ theme }) => css`
    a {
      font-family: ${theme.fonts.heading};
      margin-left: 1rem;
    }
  `}
`;

function Menu({ menuItems }) {
  // const [open, toggleOpen] = useState(false);
  return (
    <Nav>
      {menuItems.map(({ href, label }) => (
        <Link href={href} key={href}>
          {label}
        </Link>
      ))}
    </Nav>
  );
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string
    })
  ).isRequired
};

export default Menu;
