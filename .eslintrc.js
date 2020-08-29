// const path = require('path');

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-pascal-case': ['off'],
    'react/forbid-prop-types': ['off'],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: ['.storybook/**', 'stories/**']
      }
    ],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      alias: {
        map: [['@components', './packages/components/src']],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
};
