var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/upmusic",function(){
  console.log("Nawiązano połączenie z Mongodb");
});

module.exports = mongoose;
