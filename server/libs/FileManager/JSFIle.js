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
class JSFile {
  constructor(path, name) {
    this.path = path;
    this.name = name;
    this.fullPath = `${path}/${name}`;
  }
  /**
   * Creates a new component and adds it to an existing component
   * @constructor
   * @param {number} newComponent.id - id of the new component to create
   * @param {string} newComponent.type - type of new component to create
   * @param {string} newComponent.content - type of new component to create
   * @param {number} existingComponent.id - id of existing component to add new component to.
   * @param {string}existingComponent.type - type of existing component to add new component to.
   */
  async addComponent(newComponent, existingComponent) {
    const whereToModify = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.ADD_COMPONENT_CONTENT,
      this.name,
      existingComponent.type,
      existingComponent.id
    );
    const newComponentContentComment = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.ADD_COMPONENT_CONTENT,
      this.name,
      newComponent.type,
      newComponent.id
    );
    const component = `
    <${newComponent.type} id={${newComponent.id}}>
      ${newComponent.content || ""}${newComponentContentComment}
    </${newComponent.type}>

    ${whereToModify}`;
    searchAndReplace(this.fullPath, whereToModify, component);
  }

  /**
   * Creates a new component and adds it to an existing component
   * @constructor
   * @param {number} existingComponent.id - id of existing component to add new component to.
   * @param {string} existingComponent.type - type of existing component to add new component to.
   * @param {string} content - new content to add to component.
   * @param {boolean} override - weather this should remove the existing content of the component before extending (not supported yet)
   */
  modifyComponentContent(existingComponent, content) {
    const whereToModify = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.ADD_COMPONENT_CONTENT,
      this.name,
      existingComponent.type,
      existingComponent.id
    );
    const contentWithComment = content + whereToModify;
    searchAndReplace(this.fullPath, whereToModify, contentWithComment);
  }
  deleteComponent(id) {}
  /**
   * adds an import line to end of the import lines.
   * @constructor
   * @param {string} importLine - entire line to add to the imports of the file.
   */
  addImport(importLine) {
    const whereToModify = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.FILE_IMPORT,
      this.name
    );
    const importWithComment = importLine + "\n" + whereToModify;
    searchAndReplace(this.fullPath, whereToModify, importWithComment);
  }
}
module.exports = JSFile;
