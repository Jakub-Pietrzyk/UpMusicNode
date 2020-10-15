var Song = require("../../models/song");

var router = require("express").Router();

router.get("/",function(req, res, next){
  Song.find({user: req.auth.id}).populate('user', 'name').sort("-date").exec(function(err, songs){
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
    note: req.body.note,
    user: req.auth.id
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

router.delete("/:id", function(req,res,next){
  Song.deleteOne({_id: req.params.id}, function(err){
    if(err) return next(err);
    res.json(200);
  })
});

module.exports = router;
