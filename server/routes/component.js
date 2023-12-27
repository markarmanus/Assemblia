const express = require("express");
const componentsRouter = express.Router();

const createdComponentsCount = 0;

componentsRouter.post("/", (req, res) => {
  res.send("Should Create Component");
});
componentsRouter.patch("/:id/css", (req, res) => {
  res.send("Should Update Component CSS");
});
componentsRouter.patch("/:id/content", (req, res) => {
  res.send("Should Update Component content");
});
componentsRouter.delete("/", (req, res) => {
  res.send("Should Delete Component");
});

module.exports = componentsRouter;
