import React, { Component } from "react";
import settingsData from "@mapbox/batfish/data/settings-data";

class Footer extends Component {
  render() {
    return (
      <footer className="footer" data-testid="footer">
        {settingsData.footer.headline}
        <a
          href={settingsData.site_author_url}
          className="text-link"
          target="_blank"
        >
          {settingsData.site_author}
        </a>
        {
          settingsData.footer.body && (
            <div className="footer-body">{settingsData.footer.body}</div>
          )
        }
      </footer>
    );
  }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
