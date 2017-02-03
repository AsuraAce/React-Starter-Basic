const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [postcssImport, precss, autoprefixer],
};
