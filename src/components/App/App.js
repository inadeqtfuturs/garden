/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeProvider as UIThemeProvider } from 'theme-ui';
import { darkTheme, genTheme, ThemeContext } from '@theme';

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const theme = genTheme();
const dark = genTheme({ ...darkTheme });

export default function MyApp({ Component, pageProps }) {
  const [currentTheme, setTheme] = useState('light');
  const toggleTheme = () =>
    currentTheme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme
      }}
    >
      <ThemeProvider theme={currentTheme === 'light' ? theme : dark}>
        <UIThemeProvider theme={currentTheme === 'light' ? theme : dark}>
          <Global />
          <Component {...pageProps} />
        </UIThemeProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
