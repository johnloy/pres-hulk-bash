const glob = require("glob");
const fs = require("fs");
const path = require("path");

let html = '';
const files = glob.sync("../../src/asciicasts/*.html", { cwd: __filename });
files.forEach((file) => {
  const absolutePath = path.resolve(__filename, file);
  const contents = fs.readFileSync(absolutePath, "utf8");
  html += "\n" + contents; 
});

module.exports = html;