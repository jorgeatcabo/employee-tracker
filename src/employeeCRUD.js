const connection=require('./connection')
const cTable = require('console.table');

const readEmployees = () => {
  connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee inner join role where employee.role_id =role.id', (err, results) => {
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


module.exports = {
  readEmployees,
  createEmployee,
  updateEmployee
}
