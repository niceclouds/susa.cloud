import React, { Component } from "react";
import settingsData from "@mapbox/batfish/data/settings-data";

class Footer extends Component {
  render() {
    return (
      <footer className="footer" data-testid="footer">
        By
        <a
          href={settingsData.site_author_url}
          className="text-link"
          target="_blank"
        >
          {settingsData.site_author}
        </a>
      </footer>
    );
  }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
