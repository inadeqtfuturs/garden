import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '@theme';

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
