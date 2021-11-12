import { system } from 'styled-system';
import { alpha, lighten } from '@theme-ui/color';
import siteConfig from '@config';
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
  getLineHeight,
  getSpaceSizes
} from './themeHelper';

/**
 * theme variables
 */

const { prismTheme: pt, themes } = siteConfig;
const bp = [576, 768, 992, 1200, 1400];
const contentAtBp = [540, 720, 840, 1000, 1000];
const baseFontSize = 16;
const baseLineHeight = 1.5;
const body = 'Georgia';
const heading = 'Helvetica Neue';
const monospace = 'Menlo, monospace';
const baseSpaceSize = 16;
export const defaultColors = {
  text: '#2d2a24',
  background: '#fdfdfd',
  primary: '#b7e2d8',
  secondary: '#de7283',
  accent: '#bcadfb',
  muted: '#88d1ff'
};

/**
 * get theme object
 */
const breakpoints = getBreakPoints(bp);
const mediaQueries = getMediaQueries(bp);
const contentWidth = getContentWidth(contentAtBp);
const fontSizes = getFontSizes(baseFontSize);
const space = getSpaceSizes(baseSpaceSize);

function genTheme({ colors } = { colors: defaultColors }) {
  const prismTheme = pt ? themes[pt].colors : colors;
  return {
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
          fontSize: [6, 6, 6, 7],
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [6, 6, 6, 7]),
          marginBottom: 3
        },
        h2: {
          ...headingBase,
          fontSize: [6],
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [6]),
          marginBottom: 3
        },
        h3: {
          ...headingBase,
          fontSize: 5,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [5]),
          marginBottom: 3
        },
        h4: {
          ...headingBase,
          fontSize: 4,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [4]),
          marginBottom: 2
        },
        h5: {
          ...headingBase,
          fontSize: 3,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [3])
        },
        h6: {
          ...headingBase,
          fontSize: 2,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [2]),
          textTransform: 'uppercase'
        },
        p: {
          fontSize: 3,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [3]),
          margin: 0,
          marginBottom: 2
        },
        ul: {
          fontSize: 3,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [3]),
          margin: 0,
          padding: '0 0 0 2rem',
          marginBottom: 2,
          '&.contains-task-list': {
            listStyle: 'none',
            padding: 0
          }
        },
        ol: {
          fontSize: 3,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [3]),
          margin: 0,
          padding: '0 0 0 2rem',
          marginBottom: 2
        },
        blockquote: {
          fontSize: 3,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [3]),
          my: 3,
          mx: 0,
          padding: 3,
          border: `1px solid ${colors.primary}`,
          borderRadius: '6px',
          backgroundColor: alpha('primary', 0.1),
          '> p': { margin: 0 },
          'p+p': {
            marginTop: 1
          }
        },
        small: {
          fontFamily: 'heading',
          opacity: '0.8'
        },
        a: {
          textDecoration: 'none',
          borderBottom: `1px solid ${colors.primary}`,
          color: alpha(colors.text, 0.8),
          fontSize: 3,
          lineHeight: getLineHeight(baseFontSize, baseLineHeight, [3]),
          '&:hover': {
            color: colors.text,
            backgroundColor: alpha(colors.primary, 0.2)
          }
        },
        pre: {
          py: 3,
          my: 3,
          borderRadius: '6px',
          color: prismTheme.text,
          backgroundColor: lighten(prismTheme.background, 0.05),
          fontSize: 3,
          overflow: 'scroll',
          whiteSpace: 'pre-wrap',
          '.selector,.attr-name,.string,.char,.builtin,.inserted': {
            color: prismTheme.primary
          },
          '.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.regex,.important,.variable':
            {
              color: colors.secondary
            },
          '.comment,.prolog,.doctype,.cdata,.imports,.function,.class-name': {
            color: prismTheme.muted
          },
          '.atrule,.attr-value,.keyword,.maybe-class-name': {
            color: prismTheme.accent
          },
          '.important,.bold': {
            fontWeight: 'bold'
          },
          '.italic': {
            fontStyle: 'italic'
          },
          '.entity': {
            cursor: 'help'
          },
          '.namespace': {
            opacity: '.7'
          }
        },
        code: {
          color: colors.secondary,
          backgroundColor: alpha(colors.secondary, 0.15),
          p: '1px 2px',
          borderRadius: '3px'
        },
        '.toc': {
          backgroundColor: alpha(colors.text, 0.05),
          padding: [2, 2, 3],
          borderRadius: ['6px', '6px', '12px'],
          marginBottom: 3,
          h3: {
            marginBottom: 0
          },
          ul: {
            paddingLeft: 1,
            listStyle: 'none',
            m: 0
          }
        }
      }
    }
  };
}

export const opacity = system({
  property: 'opacity',
  scale: 'opacity'
});

export default genTheme;
