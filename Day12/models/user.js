const { Datatypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  fullName: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  email: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  password: {
    type: Datatypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
