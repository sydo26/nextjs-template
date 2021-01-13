const optimizedImages = require('next-optimized-images');

const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [optimizedImages, { // https://github.com/cyrilwanner/next-optimized-images#optimization-packages
    optimizeImages: true,
    optimizeImagesInDev: true,
  }],

  // seus outros plugins aqui

]);
