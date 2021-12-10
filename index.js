const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    layout: "layouts/main-layout",
  });
});

app.listen(port, () => console.log(`Program running port ${port}`));
