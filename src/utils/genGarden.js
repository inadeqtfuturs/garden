import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import matter from 'gray-matter';
import glob from 'fast-glob';
import markdownLinkExtractor from 'markdown-link-extractor';
import { Code } from '@components';
import parseGarden from './parseGarden';

const components = {
  pre: props => <div {...props} />,
  code: props => <Code {...props} />
};

function getFormattedDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function returnGlobInfo(usePath, route = null) {
  const sourcePath = path.join(process.cwd(), usePath);
  const newGlob = glob.sync(`${sourcePath}/**/*.mdx`);
  return newGlob.map(filepath => {
    const pathAndSlug = filepath
      .replace(new RegExp(`${path.extname(filepath)}$`), '')
      .split('/')
      .slice(-2);
    return { filepath, path: route || pathAndSlug[0], slug: pathAndSlug[1] };
  });
}

export function getFilePathInfo(source) {
  const files = Array.isArray(source)
    ? source.reduce((acc, src) => {
        const srcPath = src.path || src;
        const route = src.slug || null;
        const filesFromPath = returnGlobInfo(srcPath, route);
        return [...acc, ...filesFromPath];
      }, [])
    : returnGlobInfo(source);

  if (!files.length) return [];

  return files;
}

export async function getAllPaths(source = 'garden') {
  const paths = await getFilePathInfo(source);
  return paths;
}

export async function getAllPosts(source = 'garden') {
  const files = getFilePathInfo(source);

  const allContent = await Promise.all(
    files.map(async ({ filepath, path: slugPath, slug }) => {
      const mdxSource = await fs.readFile(filepath);
      const { content, data } = matter(mdxSource);
      const mdx = await renderToString(content, {
        components,
        mdxOptions: {
          remarkPlugins: [parseGarden]
        },
        scope: data
      });
      const links = markdownLinkExtractor(content).filter(l => l[0] === '/');

      return {
        filepath,
        slug: `/${slugPath}/${slug}`,
        content,
        frontMatter: {
          ...data,
          mentions: [...links],
          slug: `/${slugPath}/${slug}`,
          date: getFormattedDate(new Date(data.date))
        },
        mdx
      };
    })
  ).then(response =>
    response
      .sort(
        (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
      )
      .map((curr, idx, arr) => {
        // add next/prev info
        const nextPost = arr[idx - 1] ? arr[idx - 1].frontMatter : null;
        const prevPost = arr[idx + 1] ? arr[idx + 1].frontMatter : null;
        // add mentionedIn to frontMatter
        const mentionedIn = arr.filter(post => {
          return post.frontMatter.mentions.includes(curr.frontMatter.slug);
        });
        const { frontMatter } = curr;
        return {
          ...curr,
          frontMatter: {
            ...frontMatter,
            mentionedIn,
            nextPost,
            prevPost
          }
        };
      })
  );

  return allContent;
}
