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

sequelize.sync();

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection Established with Database');
    }
    catch (err)
    {
        console.log('Unable to connect with Database');
    }
})();

module.exports = sequelize;