const CommentsProcessor = require("../CommentsProcessor/CommentsProcessor");
const COMPONENT_TYPES = require("../../constants/COMPONENT_TYPES");
var fs = require("fs");

const searchAndReplace = (fullPath, searchVal, replaceVal) => {
  fs.readFile(fullPath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(searchVal, replaceVal);

    fs.writeFile(fullPath, result, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
};
class CSSFile {
  constructor(path, name) {
    this.path = path;
    this.name = name;
    this.fullPath = `${path}/${name}`;
  }

  addComponentCSSProperty(id, property, value) {}
}
module.exports = CSSFile;
