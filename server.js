var express = require('express');
app = express();
bodyParser = require('body-parser');
db = require('./db/mysql.js');
server = require('http').createServer(app);

app.set('port', (process.env.PORT || '8000'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./routes/route')(express,app);

server.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
    db.initConnection();

    db.models.User = require('./models/user.model');
    db.models.Treasure = require('./models/treasure.model');
    db.models.MoneyValue = require('./models/money_value.model');
    db.models.MoneyValue.belongsTo(db.models.Treasure, {as: 'treasure'});

});