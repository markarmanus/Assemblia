const CommentsProcessor = require("../CommentsProcessor/CommentsProcessor");
var id = 1;

const generateNextId = () => {
  id = id + 1;
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

}
`;

module.exports = { generateNextId, EditPanelInitialCSS, EditPanelInitialJS };
