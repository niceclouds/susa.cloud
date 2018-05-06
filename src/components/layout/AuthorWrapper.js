import React from "react";
import PageShell from "./PageShell";
import AuthorHeader from "../navigation/AuthorHeader";
import Footer from "../navigation/Footer";
import PropTypes from "prop-types";
import settingsData from "@mapbox/batfish/data/settings-data";

const menuItems = settingsData.header_navigation.navigation_links;

export default class AuthorWrapper extends React.Component {
  render() {
    const {
      author_image: authorImage,
      author_cover_image: authorCoverImage
    } = this.props.frontMatter;

    return (
      <PageShell {...this.props}>
        <AuthorHeader
          menuItems={menuItems}
          authorImage={authorImage}
          authorCoverImage={authorCoverImage}
        />
        <div className="px24 py24 mx-auto" style={{ maxWidth: 960 }}>
          <div className="prose">
            <h1>{this.props.frontMatter.title}</h1>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </PageShell>
    );
  }
}

AuthorWrapper.propTypes = {
  frontMatter: PropTypes.object
};
