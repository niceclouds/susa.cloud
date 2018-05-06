import React from 'react';
import PropTypes from 'prop-types';

const StyleBgImage = ({ image, children }) => {
  const style = {
    background: `url(${image}) center center`
  };

  return (
    <div className="style-bg-image" style={style}>{children}</div>
  );
};

StyleBgImage.propTypes = {
  image: PropTypes.string,
  children: PropTypes.any
};

StyleBgImage.defaultProps = {};

export default StyleBgImage;
