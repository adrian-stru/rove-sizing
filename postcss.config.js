/* eslint-disable import/no-extraneous-dependencies */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.js'),
    autoprefixer,
  ],
};
