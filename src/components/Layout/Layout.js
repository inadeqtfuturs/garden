import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Main, PageWrapper } from '@components';

function Layout({ children }) {
  return (
    <PageWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
