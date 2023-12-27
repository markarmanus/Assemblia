const express = require("express");
const app = express();
const cors = require("cors");
const componentsRouter = require("./routes/component");
const FileManager = require("./libs/FileManager/FileManager");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/component", componentsRouter);

app.post("/initialize", async (req, res) => {
  // Create JS and CSS files
  const createEditPanelFile = await FileManager.createFile("", "EditPanel.js");
  res.send(createEditPanelFile);

  // add a div the JS file with the proper styling in the css file.
  // make sure you use the correct comments in the files
  // Import JS and CSS Files into App.js
  // Use both JS and CSS files in the return method of App.js
});

app.listen(5001, () => {
  console.log("Server Started Successfully!");
});
