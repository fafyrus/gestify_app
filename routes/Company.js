// jshint esversion: 6
const express = require ("express");
const router = express.Router();
const Company = require ("../models/Company");

// CRUD Company
//// Create One
router.post("/", (req, res) => {
    let body = req.body;
    let companyData = {
        name: body.name,
        address: body.address,
    };

    Company.findOne({
        where: { name: req.body.name }
    }).then(company => {
        if (company) {
            res.json({statusCode: 409, status: 'already exists'});
        }

        Company.create({
            ecompanyData
        }).then(msg => {
            res.json({ statusCode: 201, status: 'success', statusMsg: msg});
        }).catch(err => {
            res.json({ error: `failure: ${err}`});
        });
    });
});

//// Get All
router.get("/", (req, res) => {
    Company.findAll()
    .then((listCompanies) => {
        res.status(200).send(listCompanies);
    })
    .catch(err => {
        res.json({ statusCode: 400, status: `failure: ${err}`});
    });
});

//// Get One
router.get("/:id", (req, res) => {
    Company.findOne({where: {id: req.params.id}}).then(company => {
        res.status(200).send(company);
    }).catch(err => {
        res.json({ statusCode: 400, status: `failure: ${err}`});
    });
});

//// Edit One
router.put("/:id", (req, res) => {
    const body = req.body;
    Company.findOne({ where: { id: req.params.id } })
    .then(company => {
        if (company.dataValues) {
            Company.update({
                name: body.name,
                address: body.address
            },
            { where: { id: req.params.id }}
            ).then(() => {
                res.status(201).send({message: 'company succesfully updated'});
            });
        } else {
            res.status(409).send({message: 'not exist'});
        }
    }).catch(err => {
        res.json({ statusCode: 400, status: `failure: ${err}`});
    });
});

//// Delete One
router.delete("/:id", (req, res) => {
    Company.destroy({where: {id: req.params.id}}).then(company => {
        res.status(200).send(company);
    });
    res.send({message: 'company succesfully deleted'});
});

module.exports = router;