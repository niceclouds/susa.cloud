const jetpack = require('fs-jetpack');
const path = require('path');
const { generateResponsiveImages } = require('../image-generator');
const exif = require('./exif');

const extensions = ['.jpg', '.jpeg', '.png'];

const getImagesNames = imagesDir => {
  if (!jetpack.exists(imagesDir)) {
    return null;
  }

  const filesList = jetpack.list(imagesDir);
  if (!filesList) {
    return null;
  }

  return filesList
    .filter(filename =>
      extensions.includes(path.extname(filename).toLowerCase())
    )
    .map(imageName => {
      return path.join(imagesDir, imageName);
    });
};

const getGalleryName = imagesDir => {
  const dir = imagesDir.replace(/\/$/, '');
  return dir.split(path.sep).slice(-1)[0];
};

const sizes = [
  { width: '5%', rename: { suffix: '@1x' } },
  { width: '10%', rename: { suffix: '@2x' } },
  { width: '20%', rename: { suffix: '@3x' } },
  { width: '40%', rename: { suffix: '@4x' } },
  { width: '60%', rename: { suffix: '' } }
];

const processImages = (sourceDir, outputDir, isizes) => {
  let outDir = outputDir;
  if (!outputDir) {
    outDir = path.join(sourceDir, `${getGalleryName(sourceDir)}-gallery`);
  }

  let imageSizes = isizes;
  if (!isizes) {
    imageSizes = sizes;
  }

  jetpack.dir(outDir);

  const images = getImagesNames(sourceDir);
  generateResponsiveImages(images, imageSizes, { outputDir: outDir });

  const exifPromises = images.map(imagePath => {
    return exif(imagePath);
  });

  return Promise.all(exifPromises).then(results => {
    jetpack.write(`${outDir}/gallery.json`, results);
  })
};

module.exports = {
  getImagesNames,
  getGalleryName,
  processImages
};
