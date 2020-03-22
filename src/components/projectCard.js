import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { ImageWrapper, SubTitle, ExternalLink } from '../elements';
import { fluidObject } from '../utils';

const ProjectCard = ({ project }) => {
  const { link, title, desc } = project;
  const img = project.img.childImageSharp.fluid;

  return (
    <>
      <ExternalLink href={link}>
        <SubTitle>{title}</SubTitle>
      </ExternalLink>

      <ImageWrapper>
        <ExternalLink href={link}>
          <Img fluid={img} alt={`Image of '${title}' project`} />
        </ExternalLink>
      </ImageWrapper>

      <p>{desc}</p>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: fluidObject.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
