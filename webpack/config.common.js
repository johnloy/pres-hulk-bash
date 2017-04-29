const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHardDiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {

  entry: [
    "babel-polyfill",
    "./src/app"
  ],

  output: {
    filename: "app.js",
    publicPath: ""
  },

  module: {

    rules: [

      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              "gfm": false
            }
          }
        ]
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },

      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=8192"
      },

      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }]
  },

  plugins: [

    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(
          process.env.NODE_ENV
        )
      }
    }),

    new HtmlWebpackPlugin({
      title: "Hulk Bash",
      template: "src/index.ejs"
    }),

    new HtmlWebpackHardDiskPlugin({
      alwaysWriteToDisk: true
    })
  ]

};
