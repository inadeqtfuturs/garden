import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as UIThemeProvider } from 'theme-ui';
import { defaultColors, genTheme } from '@theme';
import siteConfig from '@config';

const { themes = { default: { colors: defaultColors } } } = siteConfig;
const items = Object.keys(themes).map(theme => ({
  title: theme,
  value: theme
}));

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: items[0].title,
    toolbar: {
      icon: 'paintbrush',
      items,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    return (
    <ThemeProvider theme={genTheme({ ...themes[theme] })}>
      <UIThemeProvider theme={genTheme({ ...themes[theme] })}>
        <Story />
      </UIThemeProvider>
    </ThemeProvider>
  )},
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}