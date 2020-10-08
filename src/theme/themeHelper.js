import { css } from 'styled-components';

/**
 * theme constants
 */

const fontSizeArray = [0.5, 0.75, 0.875, 1, 1.25, 1.5, 2, 3, 4];
const spaceArray = [0, 0.25, 0.5, 1, 2, 4, 8];

/**
 * theme defaults
 * use in conjunction w/ named overrides
 */

export const headingBase = {
  fontFamily: 'heading',
  margin: 0,
  fontWeight: 400
};

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
};

export const baseOpacity = {
  hover: 0.04,
  selected: 0.08,
  disabled: 0.38,
  focused: 0.12
};

export const borders = [0, '1px solid', '2px solid', '4px solid'];

export const radii = [0, 2, 4, 8, 16, 9999, '100%'];

export const zIndices = [-666, -300, -100, 0, 100, 300, 666];

export const shadows = {
  boxShadows: {
    level: [
      'none',
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
      '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
      '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)'
    ]
  }
};

/**
 * helper functions
 */

export function convertToRem(number) {
  return `${number / 16}rem`;
}

export function getBreakPoints(bp) {
  return bp.map(p => `${p}px`);
}

const bpSizes = ['sm', 'md', 'lg', 'xl', 'xxl'];

export function getMediaQueries(bp) {
  return bpSizes.reduce(
    (acc, cur, idx) => ({
      [cur]: (...args) => css`
        @media (min-width: ${bp[idx]}px) {
          ${css(...args)}
        }
      `,
      ...acc
    }),
    {}
  );
}

export function getContentWidth(bp) {
  return [
    null,
    `${bp[0]}px`,
    `${bp[1]}px`,
    `${bp[2]}px`,
    `${bp[3]}px`,
    `${bp[4]}px`
  ];
}

export function getFontSizes(base) {
  return fontSizeArray.map(value => convertToRem(base * value));
}

export function getLineHeight(base, rhythm, values) {
  return values.map(val => `${rhythm * fontSizeArray[val]}rem`);
}

export function getSpaceSizes(base) {
  return spaceArray.map(value => convertToRem(base * value));
}
