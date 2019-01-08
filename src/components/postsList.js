import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Title, Container, SubTitle, InternalLink } from '../elements'
import { DateTime, formatReadingTime } from '../utils'


// graphql query
const POST_LIST_QUERY = graphql`
  query BlogPostListing { 
    allMarkdownRemark(sort: {
      order: DESC
      fields:[frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`


const PostList = () => (
  <div>
    <Title>Blog</Title>

    <StaticQuery
      query={POST_LIST_QUERY}
      render={({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map(({ node }) => (
          <Fragment key={node.frontmatter.slug}>
            <Container>
              
              <InternalLink to={`/posts${node.frontmatter.slug}`}>
                <SubTitle>
                  {node.frontmatter.title}
                </SubTitle>
              </InternalLink>

              <p>{node.excerpt}</p>
              
              <DateTime>
              {node.frontmatter.date}
                {` • ${formatReadingTime(node.timeToRead)}`}
              </DateTime>
            
            </Container>
          </Fragment>
        ))
      )}
    />
  </div>
)

export default PostList
