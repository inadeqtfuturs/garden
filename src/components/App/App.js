/* eslint-disable react/prop-types */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeProvider as UIThemeProvider } from 'theme-ui';
import { theme } from '@theme';

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <UIThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
      </UIThemeProvider>
    </ThemeProvider>
  );
}
