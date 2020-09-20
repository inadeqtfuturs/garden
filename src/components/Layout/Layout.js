import React from 'react';
import PropTypes from 'prop-types';
import { Branding, Header, Footer, Main, Menu, PageWrapper } from '@components';
import siteConfig from '@config';

function Layout({ children }) {
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
      </Footer>
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
