// jshint esversion: 6
const express = require ("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:8080'}));
app.use(bodyParser.urlencoded({extended : false}));

const Users = require("./routes/Users");
const Employee = require("./routes/Employee");
const Company = require("./routes/Company");


app.use("/users", Users);
app.use("/employee", Employee);
app.use("/company", Company);


app.use("*", (req, res) => {
    res.status(404).send({error: 'NOT FOUND'});
});

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});

