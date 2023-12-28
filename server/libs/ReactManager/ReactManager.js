const CommentsProcessor = require("../CommentsProcessor/CommentsProcessor");
const { removeSpaceAndNewLines, removeNewLines } = require("../Helper");

var id = 1;
const generateNextId = () => {
  id = "C" + id + 1;
  return id;
};
const EditPanelDivId = generateNextId();
const EditPanelInitialJS = `
${CommentsProcessor.structureComment(CommentsProcessor.MODIFICATION_TYPES.FILE_IMPORT, "EditPanel.js")}

import "./EditPanel.css"

function EditPanel() {
  return (
    <div id={${EditPanelDivId}}>
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
    CommentsProcessor.MODIFICATION_TYPES.CSS_FILE_STYLE,
    "EditPanel.css",
    undefined,
    EditPanelDivId
  )}
}
`;

const getFirstComponentIdInFile = (fileContent) => {
  const regex = /^(.|\n)*?id=\{(?<id>C\d*)\}/g;
  return regex.exec(fileContent)?.groups?.id;
};

const getFirstComponentTypeInFile = (fileContent) => {
  const regex = /^(.|\n)*?return(.|\n)*?<(?<tag>[a-zA-Z]*)/g;
  const tag = regex.exec(fileContent)?.groups?.tag;
  return tag;
};
module.exports = {
  generateNextId,
  getFirstComponentTypeInFile,
  getFirstComponentIdInFile,
  EditPanelInitialCSS,
  EditPanelInitialJS,
};
