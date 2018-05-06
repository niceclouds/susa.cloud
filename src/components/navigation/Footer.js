import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        Made by
        <a href="https://www.minds.com/primozsusa" className="text-link">
          Primož Suša
        </a>
      </footer>
    );
  }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
