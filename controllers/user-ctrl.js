const users = [
    {
        id: 3000,
        name: "U1",
        age: 21,
        password: "123123",
        email: "u1@kitra.abc"
    },
    {
        id: 3001,
        name: "U2",
        age: 51,
        password: "234234",
        email: "u2@kitra.abc"
    },
    {
        id: 3002,
        name: "U3",
        age: 31,
        password: "345345",
        email: "u3@kitra.abc"
    },
    {
        id: 3003,
        name: "U4",
        age: 18,
        password: "456456",
        email: "u4@kitra.abc"
    },
    {
        id: 3004,
        name: "U5",
        age: 21,
        password: "567567",
        email: "u5@kitra.abc"
    },
    {
        id: 3005,
        name: "U6",
        age: 35,
        password: "678678",
        email: "u6@kitra.abc"
    },

]

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






