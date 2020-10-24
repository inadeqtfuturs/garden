/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeProvider as UIThemeProvider } from 'theme-ui';
import { defaultColors, genTheme, ThemeContext } from '@theme';
import siteConfig from '@config';

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const { themes = { default: { colors: defaultColors } } } = siteConfig;
const modeList = {
  modes: Object.keys(themes),
  modeThemes: Object.keys(themes).map(theme => {
    return genTheme({ ...themes[theme] });
  })
};

export default function MyApp({ Component, pageProps }) {
  const [currentMode, setMode] = useState('default');
  const { modes, modeThemes } = modeList;
  const toggleMode = () => {
    const index = modes.indexOf(currentMode);
    const next = modes[(index + 1) % modes.length];
    setMode(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentMode,
        toggleMode
      }}
    >
      <ThemeProvider theme={modeThemes[modes.indexOf(currentMode)]}>
        <UIThemeProvider theme={modeThemes[modes.indexOf(currentMode)]}>
          <Global />
          <Component {...pageProps} />
        </UIThemeProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
