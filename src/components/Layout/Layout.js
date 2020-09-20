import React from 'react';
import PropTypes from 'prop-types';
import { Branding, Header, Footer, Main, Menu, PageWrapper } from '@components';

const menuItems = [
  { label: 'garden', href: '/garden' },
  { label: 'about', href: '/about' }
];

function Layout({ children }) {
  return (
    <PageWrapper>
      <Header>
        <Branding />
        <Menu menuItems={menuItems} />
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
