import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout } from 'styled-system';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  background-color: ${({ theme }) => theme.colors.background};
  ${layout}
`;

function PageWrapper({ children }) {
  return (
    <StyledWrapper minWidth={320} minHeight="100vh">
      {children}
    </StyledWrapper>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapper;
