var express = require('express');
var router = express.Router();

// GET Home Page
router.get('/', function(req, res, next) {
  var apis = [
      { name : 'Get All Employees', url : "/api/employees", method : "GET"},
      { name : 'Get Employee By Id', url : "/api/employees/{id}", method : "GET"},
      { name : 'Insert Employee', url : "/api/employees", method : "POST"},
      { name : 'Update Employee By Id', url : "/api/employees/{id}", method : "PUT"},
      { name : 'Delete Employee By Id', url : "/api/employees/{id}", method : "DELETE"}
    ];

  res.render('home', {
    title: 'ASTROSERVICE Simple Restful with Node JS',
    apis: apis
  });
});

module.exports = router;