# 🌱 digital garden

![version](https://img.shields.io/badge/dynamic/json?color=blue&label=version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Finadeqtfuturs%2Fgarden%2Fmain%2Fpackage.json)
![CI](https://github.com/inadeqtfuturs/garden/workflows/CI/badge.svg)

an opinionated, batteries included boilerplate for md/x authoring with next.js.

checkout the [documentation](DOCUMENTATION.md) to get started.

## tech

- nextjs
- md/mdx authoring using [`next-mdx-relations`](https://github.com/inadeqtfuturs/next-mdx-relations)
- theme-ui
- styled-components
- jest/github actions (ci/cd)
- lint/prettier

## run or deploy

fork or clone

```bash
yarn
yarn dev
```

## storybook

```bash 
nvm use
yarn stories
```

## test

```bash
yarn test
```

deploy with vercel or netlify

## todo

- [x] documentation
- [x] dark/light theme
- [x] search
- [x] syntax highlighting
- [x] storybook
- [ ] multiple content directories
- [ ] specify layout through frontmatter
- [ ] roam style backlinks
- [ ] link preview
- [ ] last updated
- [ ] pagination
- [ ] images/image optimization
- [ ] cli -- allows for markdown parity
