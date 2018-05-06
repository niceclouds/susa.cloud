import React from 'react';
import PageShell from './PageShell';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

export default class MarkdownWrapper extends React.Component {
  renderToc() {
    const { headings } = this.props.frontMatter;
    if (!headings) return null;
    const entries = headings
      .filter(heading => {
        return heading.level > 1 && heading.level < 4;
      })
      .map(heading => {
        const linkStyle = { marginLeft: 20 * (heading.level - 2) };
        return (
          <li key={heading.slug}>
            <a href={`#${heading.slug}`} style={linkStyle}>
              {heading.text}
            </a>
          </li>
        );
      });
    return <ul>{entries}</ul>;
  }

  render() {
    return (
      <PageShell {...this.props}>
        <Header />
        <div className="px24 py24 mx-auto" style={{ maxWidth: 960 }}>
          <div className="prose">
            <h1>{this.props.frontMatter.title}</h1>
            {this.renderToc()}
            {this.props.children}
          </div>
        </div>
        <Footer />
      </PageShell>
    );
  }
}
