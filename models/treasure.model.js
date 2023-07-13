var db = require('../db/mysql.js');
var Sequelize = require('sequelize');

module.exports = db.instanceSequelize.define('treasures', {

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

    latitude: {
        type: Sequelize.STRING,
        required: true
    },

    longitude: {
        type: Sequelize.STRING,
        required: true
    }

});








