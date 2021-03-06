var express = require("express");
var question = require("./lib/questions.js");

var app = express();

//set up handlebars view engine
var handlebars = require("express3-handlebars")
  .create({ defaultLayout: "main" });
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("splash");
});

app.get("/game", function (req, res) {
  res.render("game", { question: question.quotes() });
});

//404 catch-all handler (middleware)
app.use(function (req, res, next) {
  res.status(404);
  res.render("404");
});

//500 error handler (middleware)
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"), function () {
  console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate");
});
