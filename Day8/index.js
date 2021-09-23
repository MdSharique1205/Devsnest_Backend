const express = require("express");
const body_parser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();

const checkAccess = (req, res, next) => {
  // middleware - function which checks if its ok to run the main function
  if (req.query.access === "true") next();
  else res.send("Access Denied");
};
// to access req.body we use body-parser
app.use(body_parser, urlencoded({ extended: true })); // for form type we user urlencoded
app.use(body_parser.json()); // for json data

app.get("/", checkAccess, (req, res) => {
  // res.jsonI({ text: req.body });
  res.send("Access Verified");
  console.log("Second");
});

app.use(checkAccess); //middleware inside this runs before every API call below this line
// if placed above get will run before that function if placed after will run after that function

app.get("/product", (req, res) => {
  res.send("Products Page");
});

app.listen(5000);
