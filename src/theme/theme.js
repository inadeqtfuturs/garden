import { system } from 'styled-system';
import {
  headingBase,
  fontWeights,
  baseOpacity,
  borders,
  radii,
  zIndices,
  shadows,
  getBreakPoints,
  getMediaQueries,
  getContentWidth,
  getFontSizes,
  getSpaceSizes
} from './themeHelper';

/**
 * theme variables
 */

const bp = [576, 768, 992, 1200, 1400];
const contentAtBp = [540, 720, 960, 1140, 1320];
const baseFontSize = 16;
const colors = {
  text: '#333',
  background: '#fdfdfd',
  primary: '#555',
  secondary: '#4926F6',
  accent: '#b7e2d8',
  muted: '#b7e2d8',
  danger: '#DE7283'
};
const body = 'Georgia';
const heading = 'Helvetica Neue';
const monospace = 'Menlo, monospace';
const baseSpaceSize = 16;

/**
 * get theme object
 */
const breakpoints = getBreakPoints(bp);
const mediaQueries = getMediaQueries(bp);
const contentWidth = getContentWidth(contentAtBp);
const fontSizes = getFontSizes(baseFontSize);
const space = getSpaceSizes(baseSpaceSize);

/**
 * theme
 */
const theme = {
  breakpoints,
  ...mediaQueries,
  contentWidth,
  fonts: {
    body,
    heading,
    monospace
  },
  fontSizes,
  fontWeights,
  space,
  colors: { ...colors },
  borders,
  radii: { array: radii, button: 4 },
  opacity: { ...baseOpacity },
  zIndices,
  shadows,
  forms: {
    label: {
      fontFamily: 'heading'
    }
  },
  styles: {
    root: {
      h1: {
        ...headingBase,
        fontSize: [5, 5, 5, 6],
        marginBottom: 3
      },
      h2: {
        ...headingBase,
        fontSize: [4, 4, 4, 5],
        marginBottom: 2
      },
      h3: {
        ...headingBase,
        fontSize: [3, 3, 3, 4],
        marginBottom: 2
      },
      h4: {
        ...headingBase,
        fontSize: [2, 2, 2, 3]
      },
      h5: {
        ...headingBase,
        fontSize: 2,
        textTransform: 'uppercase'
      },
      h6: {
        ...headingBase,
        fontSize: 1,
        textTransform: 'uppercase'
      },
      p: {
        fontSize: [2, 2, 2, 3],
        lineHeight: 1.5,
        margin: 0,
        marginBottom: 3
      }
    }
  }
};

export const opacity = system({
  property: 'opacity',
  scale: 'opacity'
});

export default theme;
