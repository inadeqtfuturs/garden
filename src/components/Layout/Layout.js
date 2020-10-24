import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { alpha } from '@theme-ui/color';
import { Branding, Header, Footer, Main, Menu, PageWrapper } from '@components';
import { ThemeContext } from '@theme';
import siteConfig from '@config';

const ToggleButton = styled.button`
  background: transparent;
  border: 1px solid;
  ${({ theme }) => css`
    padding: ${theme.space[2]};
    border-color: ${theme.colors.text};
    border-radius: ${theme.radii.button}px;
    color: ${theme.colors.text};
    &:hover {
      cursor: pointer;
      background: ${alpha(theme.colors.text, 0.05)};
    }
  `}
`;

function Layout({ children }) {
  const { currentMode, toggleMode } = useContext(ThemeContext);
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
        <ToggleButton type="button" onClick={() => toggleMode()}>
          {currentMode}
        </ToggleButton>
      </Footer>
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
