const express = require("express");
const app = express();
const cors = require("cors");
const componentsRouter = require("./routes/component");
const FileManager = require("./libs/FileManager/FileManager");
const COMPONENT_TYPES = require("./constants/COMPONENT_TYPES");
const CommentsProcessor = require("./libs/CommentsProcessor/CommentsProcessor");

var id = 1;

const getNextId = () => {
  id += 1;
  console.log(id);
  return id;
};

app.use(
  cors({
    origin: "*",
  })
);

app.use("/component", componentsRouter);

app.post("/initialize", async (req, res) => {
  const EditPanelDivId = getNextId();
  const EditPanelJSCode = `
${CommentsProcessor.structureComment(CommentsProcessor.MODIFICATION_TYPES.FILE_IMPORT, "EditPanel.js")}

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

  const EditPanelCSSCode = `
#${EditPanelDivId} {

}
`;

  const JSFile = await FileManager.createFile("EditPanel.js", EditPanelJSCode);
  const CSSFile = await FileManager.createFile("EditPanel.css", EditPanelCSSCode);

  res.send("HELLO");
});

app.listen(5001, () => {
  console.log("Server Started Successfully!");
});
