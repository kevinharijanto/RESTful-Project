var express = require('express');
var router = express.Router();

var employeeController = require('../Employee/employeeController');

router.route('/')
    // GET ALL EMPLOYEE DATA
    .get(employeeController.getEmployees)

    // INSERT EMPLOYEE DATA
    .post(employeeController.addEmployee)

router.route('/:id')

    // GET EMPLOYEE BY ID
    .get(employeeController.getEmployeeById)

    // UPDATE EMPLOYEE
    .put(employeeController.editEmployeeById)

    // DELETE EMPLOYEE
    .delete(employeeController.deleteEmployee)

module.exports = router;