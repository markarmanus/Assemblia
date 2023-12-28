const fs = require("node:fs/promises");

const searchAndReplace = async (fullPath, searchVal, replaceVal, skipIfExists) => {
  try {
    const data = await fs.readFile(fullPath, { encoding: "utf8" });
    if (skipIfExists) {
      const trimmedFile = removeSpaceAndNewLines(data);
      const trimmedReplaceVal = removeSpaceAndNewLines(replaceVal);
      if (trimmedFile.includes(trimmedReplaceVal)) return;
    }
    const result = data.replace(searchVal, replaceVal);
    await fs.writeFile(fullPath, result);
  } catch (err) {
    throw Error("Could Not Modify File: " + fullPath);
  }
};

const removeSpaces = (str) => {
  return str.replace(/\s/g, "");
};
const removeNewLines = (str) => {
  return str.replace("\n", "");
};
const removeSpaceAndNewLines = (str) => {
  return removeNewLines(removeSpaces(str));
};
module.exports = { searchAndReplace, removeSpaces, removeNewLines, removeSpaceAndNewLines };
