const express = require("express");
const app = express();

app.use('/public', express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.json({"message": "Hello json"});
});

module.exports = app;
