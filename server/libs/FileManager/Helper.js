const fs = require("node:fs/promises");

const searchAndReplace = async (fullPath, searchVal, replaceVal) => {
  try {
    const data = await fs.readFile(fullPath, { encoding: "utf8" });
    const result = data.replace(searchVal, replaceVal);
    await fs.writeFile(fullPath, result);
  } catch (err) {
    throw Error("Could Not Modify File: " + fullPath);
  }
};
module.exports = searchAndReplace;
