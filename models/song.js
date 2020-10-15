var db = require("../db");


var schema = new db.Schema({
  title: {type: String, require: true},
  note: {type: String, require: true},
  user: {type: db.Schema.ObjectId, ref: "User"}
},
{
  timestamps: true
});

var Song = db.model("Song",schema);

module.exports = Song;
