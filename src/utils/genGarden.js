import { promises as fs } from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import matter from 'gray-matter';
import glob from 'fast-glob';
import markdownLinkExtractor from 'markdown-link-extractor';

function getFormattedDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
}

async function getAllPosts(source) {
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  // 1. get initial content
  const initialContent = await Promise.all(
    files.map(async filepath => {
      const slug = filepath
        .replace(source, '')
        .replace(/^\/+/, '')
        .replace(new RegExp(`${path.extname(filepath)}$`), '');

      const mdxSource = await fs.readFile(filepath);
      const { content, data } = matter(mdxSource);
      const mdx = await renderToString(content, {
        components: null,
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
          slug: `/garden/${slug}`,
          date: getFormattedDate(new Date(data.date))
        },
        mdx
      };
    })
  );

  const allContent = initialContent
    // 2. sort content
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

export default getAllPosts;
