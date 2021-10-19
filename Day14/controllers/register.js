// level - 3
// check if email id exists
// password hashing
// convert email to lowercase
const bcrypt = require("bcrypt");
const User = require("../models/user");

const saltRounds = 10;

const register = async (req, res) => {
  const { email, password } = req.body;
  console.log("Request", req.body);
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already registered");
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: "Sharique",
      role: "Super-admin",
    });
    const savedUser = await newUser.save();
    res.status(201).send("User Registered !");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};
const registerSuperAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already registered");
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: "Sharique",
      role: "Super-admin",
    });
    const savedUser = await newUser.save();
    req.session.User = newUser;
    console.log("efasdf: ", req.session.user);
    res.status(201).send("User Registered !");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};
module.exports = { register, registerSuperAdmin };
