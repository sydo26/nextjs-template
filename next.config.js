const optimizedImages = require('next-optimized-images');
const { nextI18NextRewrites } = require('next-i18next/rewrites')
require('dotenv').config()

const withPlugins = require('next-compose-plugins');

const localeSubpaths = {}
const rewritesConfig = [
  {
    source: '/home',
    destination: '/',
  },
]

module.exports = withPlugins([
  [optimizedImages, { // https://github.com/cyrilwanner/next-optimized-images#optimization-packages
    optimizeImages: true,
    optimizeImagesInDev: true,
  }]

], {
  env: {
    // inserir as variáveis de ambiente aqui
  },
  reactStricMode: true,
  poweredByHeader: false,
  rewrites: async () => [
    ...nextI18NextRewrites(localeSubpaths),
    ...rewritesConfig
  ],

  publicRuntimeConfig: {
    localeSubpaths
  }
});
