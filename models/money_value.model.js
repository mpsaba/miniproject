var db = require('../db/mysql.js');
var Sequelize = require('sequelize');

module.exports = db.instanceSequelize.define('money_values', {

    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    amt: {
        type: Sequelize.DECIMAL,
        required: true
    },
   
    treasureId : {
        type: Sequelize.BIGINT,
        required: true
    }

});








