import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import StyleBgImage from'./StyleBgImage';

const AuthorHeader = ({ children, menuItems, authorImage, authorCoverImage }) => {
  return (
    <header className="author-header">
      <StyleBgImage image={authorCoverImage} />
      <Navigation menuItems={menuItems} />
    </header>
  );
};

AuthorHeader.propTypes = {
  menuItems: PropTypes.array,
  authorImage: PropTypes.string,
  authorCoverImage: PropTypes.string
};

AuthorHeader.defaultProps = {};

export default AuthorHeader;
