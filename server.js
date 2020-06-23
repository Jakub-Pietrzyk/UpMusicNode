var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.use(require("./controllers/static"));

app.listen(3000, function(){
  console.log("Serwer nasłuchuje na porcie 3000");
});
