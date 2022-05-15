module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  root: true,
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/no-unescaped-entities': ['off'],
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
      alias: {
        map: [
          ['@components', './src/components'],
          ['@config', './src/config'],
          ['@layouts', './src/layouts'],
          ['@mdx', './next-mdx-relations.config.js'],
          ['@theme', './src/theme'],
          ['@utils', './src/utils']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
};
