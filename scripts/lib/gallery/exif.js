const path = require('path');
const ExifImage = require('exif').ExifImage;
const Dms = require('../dms');

const dec2frac = d => {
  let df = 1;
  let top = 1;
  let bot = 1;

  while (df !== d) {
    if (df < d) {
      top += 1;
    } else {
      bot += 1;
      top = parseInt(d * bot);
    }
    df = top / bot;
  }
  return top + '/' + bot;
};

const props = {
  Make: 'make',
  Model: 'model',
  DateTimeOriginal: 'date',
  ApertureValue: 'aperture',
  FocalLength: 'focalLength',
  ISOSpeedRatings: 'ISO',
  ExposureTime: 'shutterSpeed',
  GPSLatitudeRef: 'latRef',
  GPSLatitude: 'lat',
  GPSLongitudeRef: 'lngRef',
  GPSLongitude: 'lng',
  GPSAltitude: 'alt',
  ImageDescription: 'desc'
};

const exif = imgpath => {
  return new Promise((resolve, reject) => {
    try {
      new ExifImage(
        {
          image: imgpath
        },
        (error, data) => {
          if (error) {
            return reject(error);
          }

          const fileObj = path.parse(imgpath);
          const image = data.image;
          const exifData = data.exif;
          const gpsData = data.gps;
          const allData = Object.assign({}, image, exifData, gpsData);
          const exifMap = {};

          const keys = Object.keys(allData);
          for (let i = 0, len = keys.length; i < len; i++) {
            const prop = keys[i];
            if (props.hasOwnProperty(prop)) {
              const key = props[prop];
              let value = allData[prop];

              if (key === 'shutterSpeed') {
                value = dec2frac(value);
              }

              if (typeof value === 'number') {
                value = Math.round(value * 100) / 100;
              }

              if (key === 'date') {
                let dateTimeArr = value.split(' ');
                dateTimeArr[0] = dateTimeArr[0].split(':').join('/');
                let dateTimeStr = dateTimeArr.join(' ');
                value = new Date(dateTimeStr).getTime();
              }
              exifMap[key] = value;
            }
          }

          if (exifMap.lat) {
            const strLat = `${exifMap.lat[0]}° ${exifMap.lat[1]}′ ${
              exifMap.lat[2]
            }″ ${exifMap.latRef}`;
            exifMap.lat = Dms.parseDMS(strLat);
          }

          if (exifMap.lng) {
            const strLon = `${exifMap.lng[0]}° ${exifMap.lng[1]}′ ${
              exifMap.lng[2]
            }″ ${exifMap.lngRef}`;
            exifMap.lng = Dms.parseDMS(strLon);
          }

          exifMap.name = fileObj.base;
          resolve(exifMap);
        }
      );
    } catch (e) {
      return reject(e);
    }
  });
};

module.exports = exif;
