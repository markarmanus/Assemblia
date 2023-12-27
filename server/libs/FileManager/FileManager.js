const JSFile = require("./JSFIle");
const fs = require("fs");

const ensureServerComponentsFolder = () => {
  const ServerComponentsPath = __dirname + "/../../../frontend/src/ServerComponents";

  if (fs.existsSync(ServerComponentsPath)) {
    return true;
  } else {
    fs.mkdirSync(ServerComponentsPath);
  }
};

const createEditPanelFile = () => {
  const EditPanelFilePath = __dirname + "/../../../frontend/src/ServerComponents/EditPanel.js";
  fs.appendFile(EditPanelFilePath, "", (err) => {
    if (err) {
      return err;
    } else {
      return "the Edit Panel file is created!";
    }
  });
};

const createFile = async (filePath, fileName) => {
  ensureServerComponentsFolder();
  return createEditPanelFile();
  return new JSFile(filePath, fileName);
};

const deleteFile = async (filePath) => {};

const getFile = async (filePath) => {
  return new JSFile(filePath);
};

module.exports = {
  createFile,
  deleteFile,
  getFile,
};
