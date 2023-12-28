const CommentsProcessor = require("../CommentsProcessor/CommentsProcessor");
const COMPONENT_TYPES = require("../../constants/COMPONENT_TYPES");
const { searchAndReplace } = require("../Helper");

class CSSFile {
  constructor(path, name) {
    this.path = path;
    this.name = name;
    this.fullPath = `${path}/${name}`;
  }

  addComponentCSSProperty(id, property, value) {
    const whereToModify = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.CSS_FILE_STYLE,
      this.name,
      undefined,
      id
    );
    const content = `${property}: ${value}
                    ${whereToModify}`;
    searchAndReplace(this.fullPath, whereToModify, content);
  }
}
module.exports = CSSFile;
