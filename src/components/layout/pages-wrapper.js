import React from 'react';
import PageShell from './page-shell';

export default class MarkdownWrapper extends React.Component {
  render() {
    return (
      <PageShell {...this.props}>
        <div className="px24 py24 mx-auto" style={{ maxWidth: 960 }}>
          <div className="prose">
            {this.props.children}
          </div>
        </div>
      </PageShell>
    );
  }
}
