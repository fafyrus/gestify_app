// jshint esversion: 6
const express = require ("express");
const router = express.Router();
const Employee = require ("../models/Employee");

// CRUD Employee
//// Create One
router.post("/", (req, res) => {
    console.log(req.body);
// requête SQL recherche dans la base de donnée si l'employé existe
    Employee.findOne({
        where: { email: req.body.email }
    }).then(employee => {
        if (employee) {
            res.json({statusCode: 409, status: 'already exists'});
        }
// Si l'employé n'existe pas, celui-ci est créé
        Employee.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            city: req.body.city,
            state: req.body.state,
            id_company: req.body.id_company
        }).then(msg => {
            res.status(201).json({ status: 'success', statusMsg: msg});
        }).catch(err => {
            res.json({ error: `failure: ${err}`});
        });
    });
});

//// Get All
router.get("/", (req, res) => {
    Employee.findAll()
    .then((listEmployees) => {
        res.status(200).send(listEmployees);
        console.log(listEmployees);
    })
    .catch(err => {
        res.json({ statusCode: 400, status: `failure: ${err}`});
    });
});

//// Get One
router.get("/:id", (req, res) => {
    Employee.findOne({where: {id: req.params.id}}).then(employee => {
        res.status(200).send(employee);
    }).catch(err => {
        res.status(400).json({ status: `failure: ${err}`});
    });
});

//// Edit One
router.put("/:id", (req, res) => {
    const body = req.body;
    Employee.findOne({ where: { id: req.params.id } })
    .then(employee => {
        if (employee.dataValues) {
            Employee.update({
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                address: body.address,
                phone: req.body.phone,
                city: req.body.city,
                state: req.body.state
            },
            { where: { id: req.params.id }}
            ).then(() => {
                res.status(201).send({message: 'emloyee succesfully updated'});
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
    Employee.destroy({where: {id: req.params.id}}).then(employee => {
        res.status(200).send(employee);
    });
    res.send({message: 'Employee succesfully deleted'});
});

module.exports = router;
