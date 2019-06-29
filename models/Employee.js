// jshint esversion: 6
const Sequelize = require ("sequelize");
const db = require ("../database/db");

module.exports = db.sequelize.define('EMPLOYEE', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        id_company:{
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);


