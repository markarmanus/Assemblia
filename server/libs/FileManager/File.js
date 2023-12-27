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
class File {
  constructor(path, name) {
    this.path = path;
    this.name = name;
  }

  async createComponent(id, type, content) {
    // const createComponentComment = CommentsProcessor.structureComment(
    //   CommentsProcessor.MODIFICATION_TYPES.ADD_COMPONENT,
    //   `${this.path}/${this.name}`,
    //   type,
    //   id
    // );
    // const contentComment = CommentsProcessor.structureComment(
    //   CommentsProcessor.MODIFICATION_TYPES.CONTENT,
    //   `${this.path}/${this.name}`,
    //   type,
    //   id
    // );
    const createComponentComment = "{/* HELLOO */}";
    const contentComment = "{/* HELLOO_CONTENT */}";
    const component = `
    <${type} id={${id}}>
      ${content || ""}${contentComment}
    </${type}>

    ${createComponentComment}`;
    searchAndReplace(`${this.path}/${this.name}`, createComponentComment, component);
  }

  addComponentContent(id, content) {}
  deleteComponent(id) {}
  addComponentCSSProperty(id, property, value) {}
  addImport(importLine) {}
}
module.exports = File;
