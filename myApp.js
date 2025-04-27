const express = require("express");
const app = express();

// Serve static files from 'views' directory
app.use('/public', express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
