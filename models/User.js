// jshint esversion: 6
const Sequelize = require ("sequelize");
const Company = require('./Company');
const db = require ("../database/db");

module.exports = db.sequelize.define('USER', {
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
        password: {
            type: Sequelize.STRING
        },
        first_connection: {
            type: Sequelize.BOOLEAN
        },
        company_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Company,
                key: 'id'
              }
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);
