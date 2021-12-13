const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const users = require("./db/users.json");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressLayouts);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    layout: "layouts/main-layout",
    background: "bg-img1",
  });
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (
    users.find((item) => item.username === username) &&
    users.find((item) => item.password === password)
  ) {
    res.status(201).redirect("/game.html");
  }
});

app.get("/forgotten", (req, res) => {
  res.status(200).json(users);
});

app.get("/register", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/register.html");
});

app.get("/register/:id", (req, res) => {
  const user = users.find((i) => i.id === +req.params.id);
  res.status(200).json(user);
});

app.post("/register", (req, res) => {
  const { fullName, username, mobilePhone, gender, email, password } = req.body;
  const id = users[users.length - 1].id + 1;
  const post = {
    id,
    fullName,
    username,
    mobilePhone,
    gender,
    email,
    password,
  };
  users.push(post);
  res.status(201).redirect("/login.html");
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

app.use((req, res, next) => {
  res.status(404).redirect("/404.html");
});

app.listen(port, () => console.log(`Program running port ${port}`));
