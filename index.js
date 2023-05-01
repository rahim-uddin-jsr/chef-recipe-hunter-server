const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Genius Recipe Api running");
});

app.listen(port, () => {
  console.log("Genius Recipe run on port=", port);
});
