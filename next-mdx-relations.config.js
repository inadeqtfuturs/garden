import { createUtils } from 'next-mdx-relations';
import markdownLinkExtractor from 'markdown-link-extractor';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import parseGarden from '@utils/parseGarden';

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
      mentionedIn: nodes => {
        return nodes.map(node => {
          return nodes.filter(n =>
            n.meta?.mentions.includes(`/${node.params.slug.join('/')}`)
          );
        });
      }
    },
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkAutolinkHeadings, parseGarden]
    }
  }
);
