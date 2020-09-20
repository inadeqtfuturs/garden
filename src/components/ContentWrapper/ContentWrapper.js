import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flex, layout, space } from 'styled-system';
import { genTheme } from '@theme';

const Wrapper = styled.div`
  ${flex}
  ${layout}
  ${space}
`;

const theme = genTheme();
function ContentWrapper({ children, direction }) {
  return (
    <Wrapper
      mx={[3, 'auto']}
      width={theme.contentWidth}
      height="100%"
      flexDirection={direction}
    >
      {children}
    </Wrapper>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['column', 'row'])
};

ContentWrapper.defaultProps = {
  children: null,
  direction: 'column'
};

export default ContentWrapper;
