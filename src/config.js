export default {
  title: 'garden',
  description:
    'opinionated, batteries included boilerplate for static blogging',
  twitter: '@speculative_dev',
  favicon: '/favicon.ico',
  ogImage: '/ogImage.jpg',
  url: 'digital-garden.dev',
  content: ['content/garden', 'content/notes'],
  menu: [
    { label: 'garden', href: '/garden' },
    { label: 'about', href: '/about' }
  ],
  themes: {
    default: {
      colors: {
        text: '#2d2a24',
        background: '#fdfdfd',
        primary: '#b7e2d8',
        secondary: '#DE7283',
        accent: '#bcadfb',
        muted: '#88d1ff'
      }
    },
    dark: {
      colors: {
        text: '#d9dce0',
        background: '#2c2c2c',
        primary: '#b7e2d8',
        secondary: '#DE7283',
        accent: '#bcadfb',
        muted: '#88d1ff'
      }
    }
  },
  prismTheme: 'dark'
};
