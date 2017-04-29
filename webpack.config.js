const merge = require("webpack-merge");

const mergeStrategy = {
  entry: "prepend",
  "module.rules": "prepend"
};

module.exports = merge.smartStrategy(mergeStrategy)(
  require("./webpack/config.common"),
  require(`./webpack/config.${process.env.NODE_ENV}`)
);
