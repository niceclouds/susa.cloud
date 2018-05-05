import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="contained">
          <a href="/" className="logo">Primoz Susa</a>
          <a className="nav-link" href="/about">About</a>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
