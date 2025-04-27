let express = require('express');
let app = express();

console.log("Hello World");

const path = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(path);
});





































 module.exports = app;
