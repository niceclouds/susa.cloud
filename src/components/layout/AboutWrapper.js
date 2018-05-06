import React from 'react';
import PageShell from './PageShell';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

export default class AboutWrapper extends React.Component {
  render() {
    return (
      <PageShell {...this.props}>
        <Header />
        <div className="px24 py24 mx-auto" style={{ maxWidth: 960 }}>
          <div className="prose">
            <h1>ABOUT</h1>
            <h1>{this.props.frontMatter.title}</h1>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </PageShell>
    );
  }
}
