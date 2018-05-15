const path = require('path');
const gallery = require('./lib/gallery/gallery');
const jetpack = require('fs-jetpack');

const galleriesDir = path.join(__dirname, '../data/galleries');
const gallerisList = jetpack.list(galleriesDir);
const pubImagesDir = path.join(__dirname, '../pages/images');

gallerisList.forEach(galleryDir => {
  const sourceDir = path.join(galleriesDir, galleryDir);

  const galleryName = `${gallery.getGalleryName(sourceDir)}-gallery`;
  const outputDir = path.join(pubImagesDir, galleryName);

  const alreadyProcessed = jetpack.exists(outputDir);
  if (!alreadyProcessed) {
    gallery.processImages(sourceDir, outputDir);
  }
});
