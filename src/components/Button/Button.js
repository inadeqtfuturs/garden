import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { alpha } from '@theme-ui/color';
import { darken } from '@theme/colorFunc';

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  max-width: 220px;
  ${({ theme, disabled }) => css`
    border-radius: ${theme.radii.button}px;
    opacity: ${disabled && '0.85'};
    pointer-events: ${disabled && 'none'};
  `}
  ${({ theme, color }) =>
    variant({
      prop: 'type',
      variants: {
        default: {
          color: 'background',
          border: `${theme.borders[1]} ${theme.colors[color]}`,
          bg: color,
          '&:hover': {
            bg: darken(color, [theme.opacity.hover])
          },
          '&:active': {
            bg: darken(color, [theme.opacity.hover, theme.opacity.selected])
          },
          '&:focus': {
            boxShadow: `0 0 4px 1px ${theme.colors[color]}`,
            outline: 'none'
          }
        },
        outline: {
          color,
          border: `${theme.borders[1]} ${theme.colors[color]}`,
          bg: 'transparent',
          '&:hover': {
            bg: alpha(color, 0.1)
          },
          '&:active': {
            bg: alpha(color, 0.2)
          },
          '&:focus': {
            boxShadow: `0 0 8px 1px ${theme.colors[color]}`,
            outline: 'none'
          }
        },
        ghost: {
          color,
          border: `${theme.borders[1]} transparent`,
          bg: darken(theme.colors.background, [theme.opacity.hover]),
          '&:hover': {
            bg: darken(theme.colors.background, [theme.opacity.focused])
          },
          '&:active': {
            bg: darken(theme.colors.background, [0.15])
          },
          '&:focus': {
            border: `${theme.borders[1]} ${theme.colors[color]}`,
            outline: 'none'
          }
        }
      }
    })}
  ${variant({
    prop: 'size',
    variants: {
      sm: {
        px: 2,
        py: 1,
        fontSize: 0,
        minWidth: 'auto'
      },
      md: {
        px: 3,
        py: 2,
        fontSize: 1
      },
      lg: {
        px: 4,
        py: 3,
        fontSize: 2
      }
    }
  })}
`;

function Button({ children, color, disabled, onClick, size, type, ...props }) {
  return (
    <StyledButton
      color={color}
      disabled={disabled}
      onClick={onClick}
      size={size}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  /**
   * content of button
   */
  children: PropTypes.string,
  /**
   * takes one of 'primary', 'secondary', 'accent', 'muted'. corresponds
   * to theme colors
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'muted']),
  /**
   * if `true`, button is disabled
   */
  disabled: PropTypes.bool,
  /**
   * function called on click
   */
  onClick: PropTypes.func,
  /**
   * takes one of 'sm', 'md', 'lg'
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * takes one of 'default', 'outline', 'ghost'
   */
  type: PropTypes.oneOf(['default', 'outline', 'ghost'])
};

Button.defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  onClick: () => {},
  size: 'md',
  type: 'default'
};

export default Button;
