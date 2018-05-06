import React, { Component } from 'react';
import settingsData from "@mapbox/batfish/data/settings-data";
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="nav-wrapper">
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
