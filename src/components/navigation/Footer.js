import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="contained">
          <a
            href="https://github.com/netlify/netlify-cms/blob/master/LICENSE"
            className="text-link"
          >
            Distributed under MIT License
          </a>{' '}
          <a
            href="https://github.com/netlify/netlify-cms/blob/master/CODE_OF_CONDUCT.md"
            className="text-link"
          >
            Code of Conduct
          </a>
        </p>
      </footer>
    );
  }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
