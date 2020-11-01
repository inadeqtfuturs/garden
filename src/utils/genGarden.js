/* eslint-disable no-useless-escape */
import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import { get, isObject } from 'lodash';
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
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}

function getFiles(source) {
  if (Array.isArray(source)) {
    return source.reduce((acc, src) => {
      const usePath = src.path || src;
      const sourcePath = path.join(process.cwd(), usePath);
      const contentGlob = `${sourcePath}/**/*.mdx`;
      const files = glob.sync(contentGlob);
      return [...acc, ...files];
    }, []);
  }
  const sourcePath = path.join(process.cwd(), source);
  const contentGlob = `${sourcePath}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  return files;
}

function getSlug(filepath, source) {
  const options = source.find(s => {
    if (!isObject(s)) return false;
    return filepath.includes(s.path);
  });
  const slug = filepath
    .replace(/^.*[\\\/]/, '')
    .replace(new RegExp(`${path.extname(filepath)}$`), '');
  const slugPath = path.dirname(filepath).replace(/^.*[\\\/]/, '');
  const useSlug = get(options, 'slug', slugPath);

  return { slug, slugPath: useSlug };
}

export async function getAllPaths(source = 'garden') {
  const files = getFiles(source);
  const paths = await Promise.all(
    files.map(async filepath => {
      const { slug, slugPath } = getSlug(filepath, source);

      return { path: slugPath, slug };
    })
  );

  return paths;
}

export async function getAllPosts(source = 'garden') {
  const files = getFiles(source);

  const initialContent = await Promise.all(
    files.map(async filepath => {
      const { slug, slugPath } = getSlug(filepath, source);
      const mdxSource = await fs.readFile(filepath);
      const { content, data } = matter(mdxSource);
      const mdx = await renderToString(content, {
        components,
        mdxOptions: {
          remarkPlugins: [parseGarden]
        },
        scope: data
      });
      const links = markdownLinkExtractor(content);

      return {
        filepath,
        slug,
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
  );

  const allContent = initialContent
    .sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date))
    .map((curr, idx, arr) => {
      // 3. add next/prev info
      const nextPost = arr[idx - 1] ? arr[idx - 1].frontMatter : null;
      const prevPost = arr[idx + 1] ? arr[idx + 1].frontMatter : null;
      // 4. add mentionedIn to frontMatter
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
    });

  return allContent;
}
