const fs = require("node:fs/promises");

const searchAndReplace = async (fullPath, searchVal, replaceVal, skipIfExists) => {
  try {
    const data = await fs.readFile(fullPath, { encoding: "utf8" });
    if (skipIfExists) {
      const trimmedFile = data.replace(/\s/g, "").replace("\n", "");
      const trimmedReplaceVal = replaceVal.replace(/\s/g, "").replace("\n", "");
      if (trimmedFile.includes(trimmedReplaceVal)) return;
    }
    const result = data.replace(searchVal, replaceVal);
    await fs.writeFile(fullPath, result);
  } catch (err) {
    throw Error("Could Not Modify File: " + fullPath);
  }
};
module.exports = searchAndReplace;
