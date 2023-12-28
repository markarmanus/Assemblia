const CommentsProcessor = require("../CommentsProcessor/CommentsProcessor");
const { removeSpaceAndNewLines, removeNewLines } = require("../Helper");

let id = 1;
const resetId = () => {
  id = 1;
};
const generateNextId = () => {
  id = id + 1;
  return "C" + id;
};
const EditPanelDivId = generateNextId();
const EditPanelInitialJS = `
${CommentsProcessor.structureComment(CommentsProcessor.MODIFICATION_TYPES.FILE_IMPORT, "EditPanel.js")}

import "./EditPanel.css"

function EditPanel() {
  return (
    <div id={"${EditPanelDivId}"}>
      ${CommentsProcessor.structureComment(
        CommentsProcessor.MODIFICATION_TYPES.ADD_COMPONENT_CONTENT,
        "EditPanel.js",
        "div",
        EditPanelDivId
      )}
    </div>
  )
}
export default EditPanel
`;

const EditPanelInitialCSS = `
#${EditPanelDivId} {
  ${CommentsProcessor.structureComment(
    CommentsProcessor.MODIFICATION_TYPES.CSS_FILE_COMPONENT_STYLE,
    "EditPanel.css",
    undefined,
    EditPanelDivId
  )}
}

${CommentsProcessor.structureComment(CommentsProcessor.MODIFICATION_TYPES.CSS_FILE_END, "EditPanel.css")}
`;

const getFirstComponentIdInFile = (fileContent) => {
  const regex = /^(.|\n)*?id=\{"(?<id>C\d*)"\}/g;
  return regex.exec(fileContent)?.groups?.id;
};

const getFirstComponentTypeInFile = (fileContent) => {
  const regex = /^(.|\n)*?return(.|\n)*?<(?<tag>[a-zA-Z]*)/g;
  const tag = regex.exec(fileContent)?.groups?.tag;
  return tag;
};
module.exports = {
  generateNextId,
  resetId,
  getFirstComponentTypeInFile,
  getFirstComponentIdInFile,
  EditPanelInitialCSS,
  EditPanelInitialJS,
};
