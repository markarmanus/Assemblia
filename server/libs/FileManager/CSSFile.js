const CommentsProcessor = require("../CommentsProcessor/CommentsProcessor");
const COMPONENT_TYPES = require("../../constants/COMPONENT_TYPES");
const { searchAndReplace } = require("../Helper");

const styleToCSS = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

class CSSFile {
  constructor(path, name) {
    this.path = path;
    this.name = name;
    this.fullPath = `${path}/${name}`;
  }

  addComponentCSSProperty(id, property, value) {
    const whereToModify = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.CSS_FILE_COMPONENT_STYLE,
      this.name,
      undefined,
      id
    );
    const content = `${styleToCSS(property)}: ${value};
                    ${whereToModify}`;
    searchAndReplace(this.fullPath, whereToModify, content);
  }
  async addComponentCSSBlock(id) {
    const whereToModify = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.CSS_FILE_END,
      this.name
    );
    const cssModificationComment = CommentsProcessor.structureComment(
      CommentsProcessor.MODIFICATION_TYPES.CSS_FILE_COMPONENT_STYLE,
      this.name,
      undefined,
      id
    );
    const content = `#${id} {
      ${cssModificationComment}
    }
    ${whereToModify}`;
    await searchAndReplace(this.fullPath, whereToModify, content);
  }
}
module.exports = CSSFile;
