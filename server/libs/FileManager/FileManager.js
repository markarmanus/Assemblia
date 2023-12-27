const CSSFile = require("./CSSFile");
const JSFile = require("./JSFIle");
const fs = require("fs");

const createServerComponentsFolder = async () => {
  const serverComponentsPath = __dirname + "/../../../frontend/src/ServerComponents";
  if (!fs.existsSync(serverComponentsPath)) {
    await fs.mkdirSync(serverComponentsPath);
  }
  return serverComponentsPath;
};

const createFile = async (fileName, content) => {
  const folderPath = await createServerComponentsFolder();
  await fs.writeFile(`${folderPath}/${fileName}`, content || "", { flag: "w" }, function (err) {
    if (err) throw Error(err);
    if (fileName.includes("js")) {
      return new JSFile(folderPath, fileName);
    } else if (fileName.includes("css")) {
      return new CSSFile(folderPath, fileName);
    }
  });
};

const deleteFile = async (filePath) => {};

const getFile = async (filePath, fileName) => {
  return new JSFile(filePath, fileName);
};

module.exports = {
  createFile,
  deleteFile,
  getFile,
};
