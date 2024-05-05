const Employee = require("./employee");

class EmployeeService {
  constructor() {
    this.employees = [
        new Employee(1, "Kevin", 23, "6 juta", "kucing", "asdf1234"),
        new Employee(2, "Jessica", 19, "2 juta", "kucing2", "asdf1234") //dummy //dummy
    ];
  }

  getEmployees() {
    console.log("get all employees");
    return this.employees;
  }

  addEmployee({ name, age, salary, username, password }) {
    const id = this.employees.length + 1;
    const employee = new Employee(id, name, age, salary, username, password);
    this.employees.push(employee);
    console.log("add: ", employee.id, employee.name);
    return true;
  }

  getEmployeeById(id) {
    console.log("get: ", id);

    const employee = this.employees.find((employee) => employee.id == id);
    console.log("got: ", employee);

    if (!employee) {
      return false;
    }

    return employee;
  }

  editEmployeeById(id, { name, age, salary, username, password }) {
    console.log("edit: ", id);
    const employee = this.getEmployeeById(id);
    if (!employee) {
      return false;
    }
    employee.name = name;
    employee.age = age;
    employee.salary = salary;
    employee.username = username;
    employee.password = password;
    console.log("edited: ", employee);
    return true;
  }

  deleteEmployeeById(id) {
    console.log("delete: ", id);
    const initialLength = this.employees.length;
    this.employees = this.employees.filter((employee) => employee.id != id);
    const isDeleted = this.employees.length < initialLength;
    console.log("deleted: ", isDeleted);
    return isDeleted;
  }
}

module.exports = EmployeeService;