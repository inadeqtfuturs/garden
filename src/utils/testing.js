import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme';

export default function ThemeRender(node) {
  return renderer
    .create(<ThemeProvider theme={theme}>{node}</ThemeProvider>)
    .toJSON();
}
