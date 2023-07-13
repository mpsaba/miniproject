var db = require('../db/mysql.js');

module.exports = {

    all: function (req, res) {
        db.models.User.findAll().then(users => {
            res.json({
                error: false,
                message: users
            });
        }).catch(error => {
            console.log(error);
            res.json({
                error: true,
                message: error
            });
        });
    },

    login:  function (req, res) {
        global.userInfo = undefined;
        db.models.User.findOne({
            where:{
                name: req.body.name,
                password: req.body.password
            },
            attributes: ['id','name', 'age', 'email']
        }).then(user => {
            if(!user) throw "Invalid username or password. Please try again!"
            global.userInfo = user;
            res.json({
                error: false,
                message: user
            });
        }).catch(error => {
            console.log(error);
            res.json({
                error: true,
                message: error
            });
        });
    }
}






