import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHero = styled.div``;

function Hero({ children, ...props }) {
  return <StyledHero {...props}>{children}</StyledHero>;
}

Hero.propTypes = {
  children: PropTypes.node
};

Hero.defaultProps = {
  children: null
};

export default Hero;
