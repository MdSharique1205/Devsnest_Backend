const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
  res.send("Hello"); // similar to return lines below this won't be executed
  // res.sendStatus(200).send('Hello');     pipelining
});

app.get("/", (req, res) => {
  res.json({ name: Sharique });
});

app.get("/products", (req, res) => {
  // req.query = {
  //   name:"Sharique",
  // };
  res.send(req.query); // abcd.com/products?name=Sharique
});

app.get("/ab?cd", (req, res) => {
  //  ? marks b is optional
  res.send("ab?cd");
});

app.get("/ab+cd", (req, res) => {
  //  + marks b can be any no. of times
  res.send("ab?cd");
});

app.get("/ab*cd", (req, res) => {
  //  * marks anything can come in between
  res.send("ab?cd");
});

app.get("/ab(cd)?", (req, res) => {
  //  can use brackets to club chars
  res.send("ab?cd");
});

app.get(/a/, (req, res) => {
  //  should start with a
  res.send("ab?cd");
});

app.get(/.*fly$/, (req, res) => {
  //  ends with fly
  res.send("ab?cd");
});

app.get("/helloworld/:templeid", (req, res) => {
  res.send(req.param); // : marks variables and are stored in param
});

app.listen(5000);
