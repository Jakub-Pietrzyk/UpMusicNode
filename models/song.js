var db = require("../db");
var Song = db.model("Song", {
  title: {type: String, require: true},
  note: {type: String, require: true}
});

Song.schema.timestamps = true;

module.exports = Song;
