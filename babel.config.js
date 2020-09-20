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
          '@config': './src/config',
          '@layouts': './src/layouts',
          '@theme': './src/theme',
          '@utils': './src/utils'
        }
      }
    ],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }]
  ]
};
