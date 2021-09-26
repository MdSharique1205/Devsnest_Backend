const express = require("express");
const app = express();
const path = require("path");
// console.log(__dirname);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "public/Hello.txt"), "test.txt");
  //   res.render("index", { title: "Webpage" });
  //   res
  //     .status(201)
  //     .cookie("token", "test", {
  //       expire: new Date(Date.now() + 5 * 60000),
  //     })
  //     .cookie("hello", "hello")
  //     .redirect(301, "/admin");
});
app.get("/file/:name", (req, res) => {
  console.log(req.params);
  res.sendFile(path.join(__dirname, `/images/${req.params.name}`));
});
app.use("/json", (req, res) => {
  //   res.sendFile(path.join(__dirname, "public/test.json"), "test.json");
  //   res.download(path.join(__dirname, "public/test.json"), "JSON FILE"); // Downloading file
});

app.listen(5000);
