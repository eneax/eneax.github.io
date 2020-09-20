import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import Pagination from '../components/pagination';

// query
export const getTravelData = graphql`
  query getTravelData($skip: Int!, $limit: Int!) {
    allTravelsDataJson(limit: $limit, skip: $skip) {
      edges {
        node {
          title
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

const TravelTemplate = ({ data, pageContext }) => {
  const travels = data.allTravelsDataJson.edges;

  return (
    <Layout>
      <SEO title="️Travel" />

      <h1>Travel</h1>

      {travels.map(({ node }, index) => (
        <Card key={index} item={node} />
      ))}

      <Pagination page="travel" pageContext={pageContext} />
    </Layout>
  );
};

TravelTemplate.propTypes = {
  data: PropTypes.shape({
    allTravelsDataJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            img: PropTypes.object.isRequired,
          }),
        }).isRequired
      ).isRequired,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default TravelTemplate;
