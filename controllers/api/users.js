var router = require('express').Router();
var User = require('../../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../../config');

router.get('/', function(req,res,next){
    if(!req.headers["x-auth"]) return res.send(401); //headery autoryzacji
    
    var auth = jwt.decode(req.headers["x-auth"], config.secret)
    User.findOne({_id: auth.id}, function(err, user){
        if(err) return next(err);
        res.json(user);
    })
})

router.post('/', function(req,res,next){
    var user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email
    });

    bcrypt.hash(req.body.password, 10, function(err,hash){
        if(err) return next(err);

        user.password = hash;
        user.save(function(err){
            if(err) return next(err);
            res.send(201);
        })
    })
})

module.exports = router;