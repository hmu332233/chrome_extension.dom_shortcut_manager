const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    contentScripts: './src/contentScripts/index.js'
  },
  output: {
    path: `${ __dirname}/build`,
    filename: '[name].js',
    publicPath: './'
  },
  module: {},
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.css']
  }
};
