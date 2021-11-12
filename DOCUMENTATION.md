# documentation

## run or deploy

- clone or fork repo
- run `yarn` from root
- run `yarn dev` for development
- `yarn test` for jest testing
- `yarn lint` for linting
- `yarn stories` for storybook

deploy to netlify or vercel. use `yarn build`

## how it works

Garden utilizes [next.js prerendering](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) in conjunction with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) to statically generate pages. You can extend the functionality by editing `/pages/garden/[slug].js` and/or `/utils/genGarden.js`. Here's how it works:

0. In `/pages/garden/[slug].js`, `getStaticPaths` passes the content folder specified in config to `getAllPaths()`, which returns a list of routes.
0. `[slug].js` then calls `getAllPosts` in `getStaticProps` to get all data associated the mdx files. This includes the content, frontmatter (it handles formatting the date), and a list of mdx files that mention the current file (`mentionedIn`). We use `renderToString()` from `next-mdx-remote` to get the mdx info.
0. This information is passed to the `GardenPost()` function, which uses `next-mdx-remote`'s `hydrate()` function to handle things on the client side.

## configuration

Configuration is handled by `src/config.js`. You can change these settings or add your own. By default, config handles the following:

```js
export default {
  /*
   * title (string): title of site. used in SEO for opengraph.
   */
  title: 'garden',
  /*
   * description (string): description of site. used in SEO for opengraph.
   */
  description:
    'opinionated, batteries included boilerplate for static blogging',
  /*
   * twitter (string): twitter handle. used in SEO for opengraph.
   */
  twitter: '@speculative_dev',
  /*
   * favicon (string): path to favicon relative to /public folder.
   */
  favicon: '/favicon.ico',
  /*
   * ogImage (string): path to opengraph image relative to /public folder. used in SEO for opengraph
   */
  ogImage: '/ogImage.jpg',
  /*
   * url (string): site url. used in SEO for opengraph
   */
  url: 'digital-garden.dev',
  /*
   * content (string): path to content directory folder from root. used in genGarden.js
   */
  content: './src/garden',
  /*
   * menu (array): array of objects in shape of { label, href }. maps into navigation
   */
  menu: [
    { label: 'garden', href: '/garden' },
    { label: 'about', href: '/about' }
  ]
};
```

## theming

The theme object lives in `theme.js`. We use two `ThemeProviders` -- one for styled-components and one for ThemeUI, the latter handles the markdown styles.

There are some defaults set at the top of the file, including fonts, breakpoints, colors, base font size, and line height. These feed into helper functions (found in `themeHelper.js`) that return the final theme object.
