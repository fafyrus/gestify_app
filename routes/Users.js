// jshint esversion: 6
const express = require ("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require ("bcrypt");
const User = require ("../models/User");

process.env.SECRET_KEY = 'secret';

router.post("/register", (req, res) => {
    console.log(req.body);
    const today = new Date();
    const userData = {
        first_name : req.body.last_name,
        last_name : req.body.lasr_name,
        email : req.body.email,
        password : req.body.password,
        created : today
    };

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash;
                User.create(userData)
                .then(user => {
                    res.json({ status: user.email + ' registreted'});
                })
                .catch(err => {
                    res.send('error: ' + err);
                });
            });
        }else{
            res.json({error: 'User already exists'});
        }
    })
    .catch(err => {
        res.send('error: ' + err);
    });
});

router.post("/login", (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            email: req.body.email
        }
    }).
    then(user => {
        console.log(user);
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                });
                res.send(token);
            }
        } else {
            res.status(400).send({error: 'User does not exist'});
        }
    })
    .catch(err => {
        res.status(400).send({error: err});
    });
});

module.exports = router;
