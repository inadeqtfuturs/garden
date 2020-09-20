import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Branding, Header, Footer, Main, Menu, PageWrapper } from '@components';
import { ThemeContext } from '@theme';
import siteConfig from '@config';
import { ReactComponent as Moon } from 'public/moon.svg';
import { ReactComponent as Sun } from 'public/sun.svg';

const ThemeToggle = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
  ${({ theme }) => css`
    svg {
      stroke: ${theme.colors.primary};
    }
  `}
`;

function Layout({ children }) {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const { menu } = siteConfig;
  return (
    <PageWrapper>
      <Header>
        <Branding />
        <Menu menuItems={menu} />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <small>...they don't have to know that it's haunted</small>
        <ThemeToggle type="button" onClick={() => toggleTheme()}>
          {currentTheme === 'light' ? <Sun /> : <Moon />}
        </ThemeToggle>
      </Footer>
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
