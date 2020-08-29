import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ContentWrapper } from '@components';

const StyledMain = styled.main``;

function Main({ children }) {
  return (
    <StyledMain>
      <ContentWrapper>{children}</ContentWrapper>
    </StyledMain>
  );
}

Main.propTypes = {
  children: PropTypes.node
};

Main.defaultProps = {
  children: null
};

export default Main;
