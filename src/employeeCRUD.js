const connection=require('./connection')
const cTable = require('console.table');

const readEmployees = () => {
  connection.query('SELECT e.id, e.first_name, e.last_name, role.title,department.name as department, role.salary, m.first_name as manager FROM employee e inner join role ON role.id=e.role_id inner join department ON role.department_id =department.id left join employee m ON m.id =e.manager_id order by e.id', (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results)    
  });
};

const createEmployee=(employee)=>{
  connection.query('INSERT INTO employee SET ?',
        {
          first_name: employee.first_name,
          last_name: employee.last_name,
          role_id: employee.role_id,
          manager_id: employee.manager_id,
        },
        (err) => {
          if (err) throw err;
        }
      );
}

const updateEmployee=(employeeRoleSelected,employeeSelected)=>{
  connection.query('UPDATE employee SET ? WHERE ?',
        [
          {
            role_id: employeeRoleSelected,
          },
          {
            id: employeeSelected,
          },
        ],
        (err) => {
          if (err) throw err;
        }
      );
}

const updateEmployeeManager=(managerSelected,employeeSelected)=>{
  connection.query('UPDATE employee SET ? WHERE ?',
        [
          {
            manager_id: managerSelected,
          },
          {
            id: employeeSelected,
          },
        ],
        (err) => {
          if (err) throw err;
        }
      );
}

module.exports = {
  readEmployees,
  createEmployee,
  updateEmployee,
  updateEmployeeManager
}
