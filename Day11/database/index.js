const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres", // dbname
  "postgres", //user
  "12345678", //password
  {
      host: "localhost",
      dialect = "postgres"
  }
);
