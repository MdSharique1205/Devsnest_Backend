const express = require("express");
const app = express();

const checkAccess = (req, res, next) => {
  // middleware - function which checks if its ok to run the main function
  if (req.query.access === "true") next();
  else res.send("Access Denied");
};

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
