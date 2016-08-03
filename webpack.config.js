// Webpack config file
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: './assets/js/components/Index.jsx',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,        
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']  
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'localhost:8000'
    })
  ]
};