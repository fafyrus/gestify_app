// jshint esversion: 6
const Sequelize = require ("sequelize");
const db = require ("../database/db");

module.exports = db.sequelize.define('employee', {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        adress: {
            type: Sequelize.STRING
        },
        id_company :{
            type: Sequelize.INTEGER
        },
        timestamps: false
    }
);
