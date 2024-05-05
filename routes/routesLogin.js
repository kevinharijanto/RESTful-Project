var express = require('express');
var router = express.Router();
var loginController = require('../Login/loginController');

// GET Home Page
// router.get('/', function(req, res, next) {
//   res.render('login');
// });

router.route('/')
    // SHOW LOGIN PAGE
    .get(loginController.showLogin)

    // LOG IN
    .post(loginController.logMeIn)

module.exports = router;