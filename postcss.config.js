// postcss.config.js
module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        'custom-properties': true, // already enabled by default
        'custom-media-queries': true,
        'custom-selectors': true
      }
    }
  }
};
