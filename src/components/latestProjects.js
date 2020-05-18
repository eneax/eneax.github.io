import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Card from './card';

// styles
const ProjectsContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

// query
const getLatestProjects = graphql`
  {
    allProjectsDataJson(limit: 3) {
      edges {
        node {
          link
          title
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          desc
        }
      }
    }
  }
`;

const LatestProjects = () => {
  const response = useStaticQuery(getLatestProjects);
  const projects = response.allProjectsDataJson.edges;

  return (
    <ProjectsContainer>
      <h2>Latest Projects</h2>
      <p>
        I am passionate about open source software and giving back to others.
      </p>

      {projects.map(({ node }, index) => (
        <Card key={index} item={node} />
      ))}

      <Link to="/projects">View all projects</Link>
    </ProjectsContainer>
  );
};
export default LatestProjects;
