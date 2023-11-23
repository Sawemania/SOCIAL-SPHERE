const express = require("express");

const app = express(); // creating an express server
app.set("view engine", "ejs");
app.use(express.static("public")); // set a folder to server static files

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.use((req, res) => {
  res.status(404).render("error", {
    errorMessage: "404 Error: Page Requested was not found",
  });
});

app.listen(3001);
