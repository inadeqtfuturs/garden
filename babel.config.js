module.exports = {
  presets: ['next/babel'],
  babelrcRoots: ['./'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@theme': './src/theme',
          '@utils': './src/utils'
        }
      }
    ],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }]
  ]
};
