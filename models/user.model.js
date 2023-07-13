var db = require('../db/mysql.js');
var Sequelize = require('sequelize');

module.exports = db.instanceSequelize.define('users', {

    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        required: true,
        unique: true
    },

    age: {
        type: Sequelize.STRING,
        required: true
    },

    password: {
        type: Sequelize.STRING,
        required: true
    },

    email: {
        type: Sequelize.STRING,
        required: true
    }

});








