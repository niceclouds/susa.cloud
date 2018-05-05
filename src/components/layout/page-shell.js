import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { prefixUrlAbsolute, prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import { withLocation } from '@mapbox/batfish/modules/with-location';
import pkg from '../../../package';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

class Page extends React.Component {
  render() {
    const { props } = this;
    const title = `${props.frontMatter.title} | ${pkg.sitename}`;
    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {
            props.frontMatter.description && (
              <meta name="description" content={props.frontMatter.description} />
            )
          }

          <meta property="og:url" content={`${prefixUrlAbsolute(props.location.pathname)}`} />
          <meta property="og:title" content={props.frontMatter.title} />
          {
            props.frontMatter.description && (
              <meta property="og:description" content={props.frontMatter.description} />
            )
          }
          <meta property="og:site_name" content={pkg.sitename} />
          <meta property="og:type" content="website" />

          {
            props.frontMatter.image && (
              <meta property="og:image" content={prefixUrl(props.frontMatter.image)} />
            )
          }

          <link rel="apple-touch-icon" sizes="180x180" href={prefixUrl('/assets/apple-touch-icon.png')} />
          <link rel="icon" type="image/x-icon" href={prefixUrl('favicon.ico')} />
          <link rel="icon" type="image/png" sizes="32x32" href={prefixUrl('/assets/favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="16x16" href={prefixUrl('/assets/favicon-16x16.png')} />
          <link rel="manifest" href={prefixUrl('/manifest.json')} />
          <link rel="mask-icon" href={prefixUrl('/assets/safari-pinned-tab.svg')} color="#379bd4" />
          <link rel="shortcut icon" href={prefixUrl('/assets/favicon.ico')} />

          <meta name="apple-mobile-web-app-title" content={pkg.sitename} />
          <meta name="application-name" content={pkg.sitename} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content={prefixUrl('/assets/browserconfig.xml')} />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Header />
        {props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  children: PropTypes.node.isRequired
};

export default withLocation(Page);
