// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'production',
  entry: {
    contentScripts: './src/contentScripts/index.js',
    popup: './src/popup/index.js',
  },
  output: {
    path: `${ __dirname}/build`,
    filename: '[name].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'style.css'
    // })
  ],
  optimization: {
    minimize: true
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.scss']
  }
};
