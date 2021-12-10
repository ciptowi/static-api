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
    background: "bg-img1",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    layout: "layouts/main-layout",
    background: "bg-img2",
  });
});

app.get("/features", (req, res) => {
  res.render("features", {
    title: "Features",
    layout: "layouts/main-layout",
    background: "bg-img3",
  });
});

app.get("/requirements", (req, res) => {
  res.render("requirements", {
    title: "Requirements",
    layout: "layouts/main-layout",
    background: "bg-img4",
  });
});

app.get("/quotes", (req, res) => {
  res.render("quotes", {
    title: "Quotes",
    layout: "layouts/main-layout",
    background: "bg-img5",
  });
});

app.listen(port, () => console.log(`Program running port ${port}`));
