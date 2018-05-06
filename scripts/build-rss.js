const path = require('path');
const fs = require('fs');
const Rss = require('rss'); // https://github.com/dylang/node-rss
const config = require('../batfish.config')();
const pkg = require('../package');
const storiesData = require('../_batfish_tmp/data/stories-data');

const buildRss = () => {
  const stories = storiesData.sort((a, b) => {
    return a.frontMatter.month - b.frontMatter.month;
  });

  const feed = new Rss({
    title: pkg.sitename,
    description: pkg.description,
    feed_url: `${config.siteOrigin}/rss.xml`,
    site_url: config.siteOrigin,
    image_url: `${config.siteOrigin}/assets/favicon-32x32.png`,
    copyright: pkg.author
  });

  stories.forEach(storie => {
    feed.item({
      title: storie.frontMatter.title,
      description: storie.frontMatter.subtitle,
      url: `${config.siteOrigin}${storie.path}`,
      date: storie.date,
      // date: new Date(storie.date),
      // date: new Date(storie.date).toString(),
      // author: storie.author,
      // lat: 33.417974,
      // long: -111.933231
    });
  });

  const xml = feed.xml({indent: true});
  const outdir = config.outdir || path.join(__dirname, '../_batfish_site');
  const outfile = config.outfile || 'rss.xml';

  fs.writeFile(path.join(outdir, outfile), xml, 'utf8', (err) => {
    if (err) {
      throw err;
    }
  })
};

buildRss();
