import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { genTheme } from '@theme';

export default function ThemeRender(node) {
  const theme = genTheme();
  return renderer
    .create(<ThemeProvider theme={theme}>{node}</ThemeProvider>)
    .toJSON();
}
