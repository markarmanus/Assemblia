const File = require("./File");
const createFile = async (filePath, fileName, fileContent) => {
  return new File(filePath, fileName, fileContent);
};
const deleteFile = async (filePath) => {};

const getFile = async (filePath) => {
  return new File(filePath);
};

export default {
  createFile,
  deleteFile,
  getFile,
};
