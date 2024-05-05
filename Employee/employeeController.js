const EmployeeService = require("../Employee/employeeService");

const employeeController = new EmployeeService();

const getEmployees = (req, res) => {
  res.send(employeeController.getEmployees());
};

const addEmployee = (req, res) => {
  const { name, age, salary, username, password } = req.body;

  const addEmployee = employeeController.addEmployee({ name, age, salary, username, password });
  if (!addEmployee) {
    res.status(400).send({ message: "Employee not added" });
    return;
  }

  res.send({ message: "Employee added" });
};

const deleteEmployee = (req, res) => {
  const { id } = req.params;
  const deleteData = employeeController.deleteEmployeeById(id);
  if (!deleteData) {
    res.status(404).send({ message: "Employee not found" });
    return;
  }
  res.send({ message: "Employee deleted" });
};

const getEmployeeById = (req, res) => {
  const { id } = req.params;
  const employee = employeeController.getEmployeeById(id);
  if (!employee) {
    res.status(404).send({ message: "Employee not found" });
    return;
  }
  res.send(employee);
};

const editEmployeeById = (req, res) => {
  const { id } = req.params;
  const { name, age, salary, username, password } = req.body;

  const editEmployee = employeeController.editEmployeeById(id, {
    name,
    age,
    salary,
    username,
    password,
  });
  if (!editEmployee) {
    res.status(400).send({ message: "Employee not edited" });
    return;
  }

  res.send({ message: "Employee edited" });
};

module.exports = {
  getEmployees,
  addEmployee,
  deleteEmployee,
  getEmployeeById,
  editEmployeeById,
};