var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.use(require('./auth'));
app.use("/api/songs", require("./controllers/api/songs"));
app.use("/api/users", require("./controllers/api/users"));
app.use("/api/sessions", require("./controllers/api/sessions"));
app.use(require("./controllers/static"));

app.listen(3000, function(){
  console.log("Serwer nasłuchuje na porcie 3000");
});
