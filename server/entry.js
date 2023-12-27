const express = require("express");
const app = express();
const cors = require("cors");
const componentsRouter = require("./routes/component");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/component", componentsRouter);

app.use("/initialize", (req, res) => {
  res.send("Sank you!!");
});

app.listen(5000, () => {
  console.log("Server Started Successfully!");
});
