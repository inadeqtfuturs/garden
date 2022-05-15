import markdownLinkExtractor from 'markdown-link-extractor';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkGfm from 'remark-gfm';
import pick from 'lodash/pick';

import { createUtils } from 'next-mdx-relations';
import parseGarden from '@utils/parseGarden';

const paginationWhitelist = ['params.slug', 'frontmatter.title'];

export const { getPaths, getPages, getPageProps, getPathsByProp } = createUtils(
  {
    content: './content',
    sort: {
      by: 'frontmatter.date',
      order: 'asc'
    },
    metaGenerators: {
      mentions: node => {
        const links = markdownLinkExtractor(node.content);
        return links.filter(l => l[0] === '/');
      }
    },
    relationGenerators: {
      mentionedIn: (node, _, nodes) =>
        nodes.filter(n =>
          n.meta?.mentions.includes(`/${node.params.slug.join('/')}`)
        ),
      '[prev, next]': {
        transform: nodes =>
          nodes.sort(
            ({ frontmatter: { date: a } }, { frontmatter: { date: b } }) =>
              new Date(b) - new Date(a)
          ),
        map: (node, index, array) => {
          const next = index > 0 ? array[index - 1] : null;
          const prev = index < array.length - 1 ? array[index + 1] : null;
          return {
            prev: prev && pick(prev, paginationWhitelist),
            next: next && pick(next, paginationWhitelist)
          };
        }
      }
    },
    mdxOptions: {
      remarkPlugins: [
        remarkSlug,
        remarkAutolinkHeadings,
        parseGarden,
        remarkGfm
      ]
    }
  }
);
