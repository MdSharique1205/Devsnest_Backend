var express = require("express");
var router = express.Router();
const registerInitialCheck = require("../middlewares/registerChecks");
const register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = "sharique";
  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res, next) {
  console.log("Redis value:", req.session);
  res.render("index", { title: "Express" });
});

/*
* @requires {email, FirstName, LastName, Password, ConfirmPassword}
* @description{
  Security, performance and edge cases
  level - 1 
  email validation
  password validation
  password == confirm password
  level - 2 
  JS or SQL - THA (check ho JS or SQL is injected)
  level - 3
  check if email id exists
  password hashing
  convert email to lowercase

}
*/

router.post("/register", registerInitialCheck, register);

module.exports = router;
