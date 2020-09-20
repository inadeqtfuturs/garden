import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContentWrapper } from '@components';

const StyledHeader = styled.header``;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.space[3]} 0`};
  ${({ theme }) => theme.md`
    padding: ${theme.space[4]} 0;
  `}
`;

function Header({ children }) {
  return (
    <StyledHeader>
      <ContentWrapper>
        <InnerWrapper>{children}</InnerWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
}

Header.propTypes = {
  children: PropTypes.node
};

Header.defaultProps = {
  children: null
};

export default Header;
