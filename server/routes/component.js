const express = require("express");
const ReactManager = require("../libs/ReactManager/ReactManager");
const FileManager = require("../libs/FileManager/FileManager");
const COMPONENT_TYPES = require("../constants/COMPONENT_TYPES");
const componentsRouter = express.Router();

componentsRouter.post("/", async (req, res) => {
  const body = req.body;
  const { componentType, content } = body;
  if (componentType) {
    if (!Object.values(COMPONENT_TYPES).includes(componentType)) {
      return res.status(400).send("This Component Type is not supported!");
    }
    try {
      const file = await FileManager.getFile(undefined, "EditPanel.js");
      const fileContent = await file.getContent();
      const containerId = ReactManager.getFirstComponentIdInFile(fileContent);
      const containerType = ReactManager.getFirstComponentTypeInFile(fileContent);
      const newComponentId = ReactManager.generateNextId();
      await file.addComponent(
        { type: componentType, id: newComponentId, content },
        { type: containerType, id: containerId }
      );
      await file.addImport(
        `import ${componentType} from "../AppComponents/ComponentsPanel/UserComponents/${componentType}"`
      );
      return res.send({ id: newComponentId });
    } catch (err) {
      console.error(err);
      return res.status(500).send("Something went wrong!");
    }
  } else {
    return res.status(400).send("Please ensure you are sending the required data");
  }
});
componentsRouter.patch("/:id/css", async (req, res) => {
  const body = req.body;
  const { property, value } = body;
  if (property && value && req.params.id) {
    const file = await FileManager.getFile(undefined, "EditPanel.css");

    await file.addComponentCSSProperty(req.params.id, property, value);
    res.send("Changed CSS Property Successfully!");
  } else {
    return res.status(400).send("Please ensure you are sending the required data");
  }
});
componentsRouter.patch("/:id/content", (req, res) => {
  res.send("Should Update Component content");
});
componentsRouter.delete("/", (req, res) => {
  res.send("Should Delete Component");
});

module.exports = componentsRouter;
