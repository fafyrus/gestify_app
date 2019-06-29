// jshint esversion: 6
const Sequelize = require ("sequelize");
const db = {};
const sequelize = new Sequelize ("gestify_db", "root", "root", {
    host: "localhost",
    dialect: 'mysql',
    port: "8889",
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize;

module.exports = db;