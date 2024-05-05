const EmployeeService = require("../Employee/employeeService");
const employeeController = new EmployeeService();

class LoginService {
  checkLogin(username, password) {
    console.log(employeeController.getEmployees())
    let employeeDB = employeeController.getEmployees()
    for (let i = 0; i < employeeDB.length; i++) {
        if(username === employeeDB[i].username && password === employeeDB[i].password){
            return true
        }
    }
  }
}

module.exports = LoginService;