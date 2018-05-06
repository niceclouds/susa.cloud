import React from "react";
import PropTypes from "prop-types";

const IconPlus = props => {
  return (
    <svg>
      <g>
        <line
          className="line1"
          x1="0"
          x2="24"
          y1="12"
          y2="12"
          stroke="#333"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <line
          className="line2"
          x1="12"
          x2="12"
          y1="0"
          y2="24"
          stroke="#333"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

IconPlus.propTypes = {};
IconPlus.defaultProps = {};

export default IconPlus;
