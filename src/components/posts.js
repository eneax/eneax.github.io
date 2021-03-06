import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Post = styled.article`
  margin-bottom: var(--spacing-10);
  margin-top: var(--spacing-10);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
  transition: all 0.25s ease;
  &:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
  }

  header {
    margin-bottom: var(--spacing-2);
    padding: var(--spacing-6) var(--spacing-6) var(--spacing-0);
  }

  h2 {
    font-size: var(--fontSize-4);
    color: var(--color-primary);
    margin-bottom: var(--spacing-2);
    margin-top: var(--spacing-0);
  }

  p {
    margin-bottom: var(--spacing-0);
    color: var(--color-text);
    padding: var(--spacing-0) var(--spacing-6) var(--spacing-6);
  }
`;

const Posts = ({ posts }) => (
  <section>
    {posts.map((post) => {
      const title = post.frontmatter.title || post.fields.slug;

      return (
        <Post
          itemScope
          itemType="http://schema.org/Article"
          key={post.fields.slug}
        >
          <Link to={post.fields.slug} itemProp="url">
            <header>
              <h2>
                <span itemProp="headline">{title}</span>
              </h2>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </Link>
        </Post>
      );
    })}
  </section>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }).isRequired,
      excerpt: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Posts;
