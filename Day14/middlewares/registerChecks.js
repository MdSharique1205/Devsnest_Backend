const { emailValidate, passwordValidate } = require("../utils/validate");

// level - 1
// email validation
// password validation
// password == confirm password

const registerCheck = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  console.log("Details: ", email);
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    password === confirmPassword
    // emailValidate(email) &&
    // passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send("Initial Check Fails !!");
  }
};

module.exports = registerCheck;
