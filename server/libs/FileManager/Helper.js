var fs = require("fs");

const searchAndReplace = async (fullPath, searchVal, replaceVal) => {
  await fs.readFile(fullPath, "utf8", async function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(searchVal, replaceVal);

    await fs.writeFile(fullPath, result, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
};
module.exports = searchAndReplace;
