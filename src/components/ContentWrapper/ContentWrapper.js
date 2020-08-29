import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, space } from 'styled-system';
import { theme } from '@theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${layout}
  ${space}
`;

function ContentWrapper({ children }) {
  return (
    <Wrapper mx={[3, 'auto']} width={theme.contentWidth} height="100%">
      {children}
    </Wrapper>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node
};

ContentWrapper.defaultProps = {
  children: null
};

export default ContentWrapper;
