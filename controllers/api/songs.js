var Song = require("../../models/song");

var router = require("express").Router();

router.get("/",function(req, res, next){
  Song.find().sort("-date").exec(function(err, songs){
    if(err) return next(err);
    res.json(songs);
  });
});

router.get("/:id", function(req,res,next){
  Song.findById(req.params.id).exec(function(err, song){
    if(err) return next(err);
    res.json(song);
  });
});

router.post("/create", function(req,res,next){
  var song = new Song({
    title: req.body.title,
    note: req.body.note
  });

  song.save(function(err, song){
    if(err) return next(err);
    res.json(201, song);
  });
});

router.post("/:id/update", function(req,res,next){
  Song.findByIdAndUpdate(req.params.id, req.body, {upsert: true}, function(err, song){
    if(err) return next(err);
    res.json(201, song);
  });
});

module.exports = router;
