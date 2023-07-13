var controller = require('../controllers/treasure-ctrl');
var express = require('express'),
    router = express.Router();

router.post('/find-treasure', function (req, res, next) {
    controller.findTreasure(req, res, next);
});

module.exports = router;






