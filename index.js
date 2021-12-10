const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Express js");
});

app.listen(port, () => console.log(`Program running port ${port}`));