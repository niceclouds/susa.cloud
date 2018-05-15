const path = require('path');
const gallery = require('./lib/gallery/gallery');
const jetpack = require('fs-jetpack');

const minMax = (items, key) => {
  return items.reduce((acc, val) => {
    acc[0] = acc[0] === undefined || val[key] < acc[0] ? val[key] : acc[0];
    acc[1] = acc[1] === undefined || val[key] > acc[1] ? val[key] : acc[1];
    return acc;
  }, []);
};

const galleriesDir = path.join(__dirname, '../data/galleries');
const gallerisList = jetpack.list(galleriesDir);
const pubImagesDir = path.join(__dirname, '../pages/images');

const galleries = [];
let imagesByGallery = {};
let processPromises = [];

gallerisList.forEach(galleryDir => {
  const sourceDir = path.join(galleriesDir, galleryDir);
  const galleryName = `${gallery.getGalleryName(sourceDir)}-gallery`;
  const outputDir = path.join(pubImagesDir, galleryName);

  const alreadyProcessed = jetpack.exists(outputDir);
  if (!alreadyProcessed) {
    const promise = gallery.processImages(sourceDir, outputDir);
    processPromises.push(promise);
  }

  galleries.push(galleryName);
});

Promise.all(processPromises).then(results => {
  galleries.forEach(name => {
    const outputDir = path.join(pubImagesDir, name);
    
    const galleryImages = jetpack.read(
      path.join(outputDir, 'gallery.json'),
      'json'
    );

    const minMaxDate = minMax(galleryImages, 'date');
    imagesByGallery = {
      ...imagesByGallery,
      [name]: {
        from: minMaxDate[0],
        to: minMaxDate[1],
        images: galleryImages
      }
    };
  });

  jetpack.write(`${pubImagesDir}/galleries.json`, { galleries, imagesByGallery });
}).catch(err => {
  console.log(err);
});
