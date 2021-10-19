const { Sequelize } = require("sequelize");

const {
  sequelize_database,
  sequelize_username,
  sequelize_password,
  sequelize_host,
  sequelize_dialect,
  secret,
} = require("../config/index");

const sequelize = new Sequelize(
  sequelize_database, // dbname
  sequelize_username, //user
  sequelize_password, //password
  {
    host: sequelize_host,
    dialect: sequelize_dialect,
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection Established with Database");
  } catch (err) {
    console.log("Unable to connect with Database");
  }
})();

module.exports = sequelize;
