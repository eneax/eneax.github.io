import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { darkTheme } from '../utils/colors';

// styles
const PostMetaContainer = styled.p`
  color: ${darkTheme.textLighter};
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;

const PostMeta = ({ date, tags }) => (
  <PostMetaContainer>
    {date}
    <span> ● Tag: </span>
    {tags.map(tag => (
      <Link key={tag.toLowerCase()} to={`/tags/${tag.toLowerCase()}`}>
        {tag}
      </Link>
    ))}
  </PostMetaContainer>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PostMeta;
