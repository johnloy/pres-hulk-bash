/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {

  devtool: "source-map",

  entry: [
    "webpack-hot-middleware/client"
  ],

  output: {
    path: path.join(__dirname, "../public"),
  },

  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        query: {
          plugins: [
            [
              "react-transform", {
                transforms: [{
                  transform: "react-transform-hmr",
                  imports: ["react"],
                  locals: ["module"]
                }, {
                  transform: "react-transform-catch-errors",
                  imports: ["react", "redbox-react"]
                }]
              }
            ]
          ]
        },
        exclude: /node_modules/
      }, 

      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      }, 

      {
        test: /\.gif$/,
        loader: "url-loader?mimetype=image/gif"
      }, 

      {
        test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

};
