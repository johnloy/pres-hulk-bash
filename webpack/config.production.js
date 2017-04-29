/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {

  output: {
    path: path.join(__dirname, "../dist"),
  },

  plugins: [

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })

  ]

};
