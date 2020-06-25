var Song = require("../../models/song");

var router = require("express").Router();

router.get("/",function(req, res, next){
  Song.find().sort("-date").exec(function(err, songs){
    if(err) return next(err);
    res.json(songs);
  });
});

module.exports = router;
