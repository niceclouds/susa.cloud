const pageSettingsData = require('./pages/settings');

const settingsData = () => {
  return pageSettingsData;
};

const authorsData = data => {
  const ndata = data.pages.filter(page => /\/author\/.+/.test(page.path));
  return ndata.sort((a, b) => {
    return a.frontMatter.title - b.frontMatter.title;
  });
};

const storiesData = data => {
  const stories = data.pages.filter(page => /\/stories\/.+/.test(page.path));
  return stories.sort((a, b) => {
    return a.frontMatter.date - b.frontMatter.date;
  });
};

module.exports = {
  settingsData,
  storiesData
};
