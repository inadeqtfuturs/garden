import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { alpha } from '@theme-ui/color';
import { Layout, Link, SEO, Tags } from '@components';

const Article = styled.article`
  ${({ theme }) => css`
    ${theme.lg`
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 2fr 1fr;
    `}
    ${theme.xl`
      grid-template-columns: 3fr 1fr;
    `}
  `}
`;

const Header = styled.div`
  margin-bottom: 2rem;
  p {
    margin: 0 0 0.25rem;
  }
`;

const LinkWrapper = styled.div`
  ${({ theme }) => css`
    width: 45%;
    ${theme.md`
      width: 30%;
    `}
    a {
      display: flex;
      flex-direction: column;
      padding: ${theme.space[3]};
      border-radius: 6px;
      background-color: ${alpha(theme.colors.text, 0.05)};
      border: 1px solid transparent;
    }
    a:hover {
      background-color: ${alpha(theme.colors.primary, 0.2)};
      border: 1px solid ${theme.colors.primary};
    }
  `}
`;

const MentionedIn = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[3]};
    border-radius: 6px;
    background-color: ${alpha(theme.colors.text, 0.05)};
    border: 1px solid transparent;
    &:hover {
      background: ${alpha(theme.colors.primary, 0.2)};
      border: 1px solid ${theme.colors.primary};
    }
    margin-bottom: 1rem;
    p {
      font-size: 0.75rem;
      line-height: 1rem;
      margin: 0;
    }
  `}
`;

const MentionedWrapper = styled.aside``;

const PaginationWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${({ theme }) => css`
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${theme.colors.text};
  `}
`;

function Post({ components, content, frontmatter, mentionedIn }) {
  const { date, description, tags, title, prevPost, nextPost } = frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Header>
        <h2>{title}</h2>
        <p>{date}</p>
        <Tags tags={tags} />
      </Header>
      <Article>
        <div>
          <MDXRemote {...content} components={components} />
        </div>
        <MentionedWrapper>
          {mentionedIn && (
            <>
              <h3>mentioned in</h3>
              {mentionedIn.map(
                ({
                  frontmatter: {
                    title: mentionedTitle,
                    description: mentionedDescription
                  },
                  params: { slug }
                }) => (
                  <Link href={`/${slug.join('/')}`} key={slug}>
                    <MentionedIn>
                      <h5>{mentionedTitle}</h5>
                      <p>{mentionedDescription}</p>
                    </MentionedIn>
                  </Link>
                )
              )}
            </>
          )}
        </MentionedWrapper>
      </Article>
      <PaginationWrapper>
        <LinkWrapper>
          {prevPost && (
            <>
              <Link href={prevPost.slug} key={prevPost.slug}>
                <small>previous post</small>
                {prevPost.title}
              </Link>
            </>
          )}
        </LinkWrapper>
        <LinkWrapper>
          {nextPost && (
            <>
              <Link href={nextPost.slug} key={nextPost.slug}>
                <small>next post</small>
                {nextPost.title}
              </Link>
            </>
          )}
        </LinkWrapper>
      </PaginationWrapper>
    </Layout>
  );
}

Post.propTypes = {
  components: PropTypes.object,
  content: PropTypes.object.isRequired,
  frontmatter: PropTypes.object.isRequired,
  mentionedIn: PropTypes.array
};

Post.defaultProps = {
  components: {},
  mentionedIn: []
};

export default Post;
