import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContentWrapper } from '@components';

const StyledFooter = styled.footer``;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.space[2]} 0`};
  ${({ theme }) => theme.md`
    padding: ${theme.space[4]} 0 ${theme.space[2]};
  `}
`;

function Footer({ children }) {
  return (
    <StyledFooter>
      <ContentWrapper>
        <InnerWrapper>{children}</InnerWrapper>
      </ContentWrapper>
    </StyledFooter>
  );
}

Footer.propTypes = {
  children: PropTypes.node
};

Footer.defaultProps = {
  children: null
};

export default Footer;
