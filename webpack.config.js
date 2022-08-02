// webpack.config.js
const path = require('path');


module.exports = {
  entry: './src/Index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: [/node_modules/,/dist/],
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  }
};
