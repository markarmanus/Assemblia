const express = require("express");
const app = express();
const cors = require("cors");
const componentsRouter = require("./routes/component");
const FileManager = require("./libs/FileManager/FileManager");
const ReactManager = require("./libs/ReactManager/ReactManager");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/component", componentsRouter);

app.post("/initialize", async (req, res) => {
  await FileManager.createFile("EditPanel.js", ReactManager.EditPanelInitialJS);
  await FileManager.createFile("EditPanel.css", ReactManager.EditPanelInitialCSS);
  const appJSFile = await FileManager.getFile("../frontend/src", "App.js");
  const editPanelId = ReactManager.generateNextId();
  await appJSFile.addImport(`import EditPanel from "./ServerComponents/EditPanel";`);
  await appJSFile.addComponent({ type: "EditPanel", id: editPanelId }, { type: "div", id: 0 });

  res.send("Initialized Successfully");
});

app.listen(5001, () => {
  console.log("Server Started Successfully!");
});
