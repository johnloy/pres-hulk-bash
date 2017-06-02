const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHardDiskPlugin = require("html-webpack-harddisk-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const asciicastHTML = require("./asciicast-html");

const buildDir = process.NODE_ENV === "production" ? "dist" : "public";

module.exports = {

  context: path.join(__dirname, ".."),

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
        test: /\.(gif)$/,
        loader: "url-loader?limit=500"
      },

      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },

      {
        test: /\.sh$/,
        loader: "raw-loader"
      }
    ]
  },

  plugins: [

    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(
          process.env.NODE_ENV
        )
      }
    }),

    new CleanWebpackPlugin(
      [buildDir],
      {
        verbose: true
      }
    ),

    new CopyWebpackPlugin(
      [
        {
          from: "vendor/**/*",
          flatten: true
        },
        {
          from: "src/asciicasts/*",
          flatten: true
        },
        {
          from: "src/styles.css",
          flatten: true
        },
        {
          from: "src/fonts/*",
          flatten: true
        }
      ],
      {
        debug: "warnings"
      }
    ),

    new HtmlWebpackPlugin({
      title: "Hulk Bash",
      template: "src/index.ejs",
      inject: false,
      alwaysWriteToDisk: true,
      asciicastHTML
    }),

    new HtmlWebpackHardDiskPlugin()
  ]

};
