// jshint esversion: 6
const express = require ("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require ("bcrypt");
const User = require ("../models/User");

process.env.SECRET_KEY = 'secret';

router.post("/register", (req, res) => {
    const today = new Date();
    const userData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
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
                    res.status(201).send({status: user.email + ' registreted'});
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
    User.findOne({
        where: {
            email: req.body.email
        }
    }).
    then(user => {
        if(user) {
            console.log(user.dataValues);
            if(bcrypt.compareSync(req.body.password, user.password)){
                delete user.dataValues.password;
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                });
                res.status(200).send({token: token, user: user.dataValues});
            }
        } else {
            res.status(400).send({error: 'User does not exist'});
        }
    })
    .catch(err => {
        res.status(400).send({error: err});
    });
});

router.patch("/:id", (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        if (user.dataValues) {
            User.update({
                first_connection: false
            },
            { where: { id: req.params.id }}
            ).then(() => {
                res.status(201).send({message: 'user succesfully updated'});
            });
        } else {
            res.status(409).send({message: 'not exist'});
        }
    }).catch(err => {
        res.json({ statusCode: 400, status: `failure: ${err}`});
    });
});

module.exports = router;
