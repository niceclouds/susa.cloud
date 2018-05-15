const path = require('path');

module.exports = function(filePath) {
  const extname = path.extname(filePath).toLowerCase();

  switch (extname) {
    case '.jpeg':
    case '.jpg':
    case '.jpe':
      return 'jpeg';
    case '.png':
      return 'png';
    case '.webp':
      return 'webp';
    default:
      return 'unsupported';
  }
};
