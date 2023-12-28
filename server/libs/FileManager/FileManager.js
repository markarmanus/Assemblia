const CSSFile = require("./CSSFile");
const JSFile = require("./JSFIle");
const fs = require("node:fs/promises");

const createServerComponentsFolder = async () => {
  const serverComponentsPath = __dirname + "/../../../frontend/src/ServerComponents";
  try {
    await fs.access(serverComponentsPath);
  } catch {
    await fs.mkdir(serverComponentsPath);
  }
  return serverComponentsPath;
};

const createFile = async (fileName, content) => {
  const folderPath = await createServerComponentsFolder();
  try {
    await fs.writeFile(`${folderPath}/${fileName}`, content || "", { flag: "w" });
    if (fileName.includes("js")) {
      return new JSFile(folderPath, fileName);
    } else if (fileName.includes("css")) {
      return new CSSFile(folderPath, fileName);
    }
  } catch (err) {
    throw Error(err);
  }
};

const deleteFile = async (filePath) => {};

/**
 * adds an import line to end of the import lines.
 * @constructor
 * @param {string} filePath - Path of file to get, defaults to path of ServerComponents
 * @param {string} fileName - file name to get.
 * @returns {JSFile}
 */
const getFile = async (filePath, fileName) => {
  if (!filePath) {
    filePath = await createServerComponentsFolder();
  }
  return new JSFile(filePath, fileName);
};

module.exports = {
  createFile,
  deleteFile,
  getFile,
};
