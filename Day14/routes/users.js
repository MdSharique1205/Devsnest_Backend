var express = require("express");
var router = express.Router();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "$harIqu3",
  port: 5432,
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  pool.query('SELECT * FROM "Users"', (err, res) => {
    if (err) throw err;
    res.status(200).json(res);
  });
  res.send("respond with a resource");
});

module.exports = router;