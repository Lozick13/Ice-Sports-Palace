const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
            ],
          },
        },
      }),
      {
        apply: compiler => {
          // Lazy load the Terser plugin
          const TerserPlugin = require('terser-webpack-plugin');
          new TerserPlugin({
            terserOptions: {
              compress: {
                passes: 2,
              },
            },
          }).apply(compiler);
        },
      },
    ],
  },
};
