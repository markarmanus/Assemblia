const CommentsProcessor = require("../CommentsProcessor/CommentsProcessor");
const COMPONENT_TYPES = require("../../constants/COMPONENT_TYPES");
const searchAndReplace = require("./Helper");

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
    await searchAndReplace(this.fullPath, whereToModify, component, true);
  }

  /**
   * Creates a new component and adds it to an existing component
   * @constructor
   * @param {number} existingComponent.id - id of existing component to add new component to.
   * @param {string} existingComponent.type - type of existing component to add new component to.
   * @param {string} content - new content to add to component.
   * @param {boolean} override - weather this should remove the existing content of the component before extending (not supported yet)
   */
  async modifyComponentContent(existingComponent, content) {
    const whereToModify = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.ADD_COMPONENT_CONTENT,
      this.name,
      existingComponent.type,
      existingComponent.id
    );
    const contentWithComment = content + whereToModify;
    await searchAndReplace(this.fullPath, whereToModify, contentWithComment, true);
  }
  deleteComponent(id) {}
  /**
   * adds an import line to end of the import lines.
   * @constructor
   * @param {string} importLine - entire line to add to the imports of the file.
   */
  async addImport(importLine) {
    const whereToModify = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.FILE_IMPORT,
      this.name
    );
    const importWithComment = importLine + "\n" + whereToModify;
    await searchAndReplace(this.fullPath, whereToModify, importWithComment, true);
  }
}
module.exports = JSFile;
