// jshint esversion: 6
const Sequelize = require ("sequelize");
const db = require ("../database/db");

module.exports = db.sequelize.define('COMPANY', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        id_user :{
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);
