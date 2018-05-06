const path = require('path');
const nestedcss = require('postcss-nested');
const cssvars = require('postcss-simple-vars-async');
const styleVariables = require('./src/style/variables');
const dataSelectors = require('./selectors');

module.exports = () => {
  return {
    siteOrigin: 'https://susa.cloud',
    pagesDirectory: path.join(__dirname, './pages'),
    webpackLoaders: [],
    webpackPlugins: [],
    babelPlugins: [],
    dataSelectors,
    stylesheets: [
      path.join(__dirname, './src/style/assembly/assembly.css'),
      path.join(__dirname, './src/style/base.css'),
      path.join(__dirname, './src/style/header.css'),
      path.join(__dirname, './src/style/footer.css')
    ],
    postcssPlugins: defaultPlugins => {
      return [
        nestedcss(),
        cssvars({ variables: styleVariables }),
        ...defaultPlugins
      ];
    },
    applicationWrapperPath: path.join(
      __dirname,
      './src/components/layout/AppWrapper.js'
    ),
    jsxtremeMarkdownOptions: {
      getWrapper: resource => {

        if (/\/author\//.test(resource)) {
          return path.join(__dirname, './src/components/layout/AuthorWrapper.js');
        }

        if (/\/about.md/.test(resource)) {
          return path.join(__dirname, './src/components/layout/AboutWrapper.js');
        }

        return path.join(__dirname, './src/components/layout/MarkdownWrapper.js');
      }
    },
    fileLoaderExtensions: ['jpeg', 'jpg', 'png', 'gif', 'webp', 'mp4', 'webm', 'woff', 'woff2', 'svg'],
    unprocessedPageFiles: ['files/**/*.md', 'edit/**/*'],
    ignoreWithinPagesDirectory: ['**/*.txt']
  };
};
