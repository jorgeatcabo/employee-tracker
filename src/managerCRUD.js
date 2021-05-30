const connection=require('./connection')
const cTable = require('console.table');

const viewManagerEmployees = (managerSelectedToViewEmployees) => {
  connection.query('SELECT e.id, e.first_name, e.last_name, role.title,department.name as department, role.salary, m.first_name as manager FROM employee e inner join role ON role.id=e.role_id inner join department ON role.department_id =department.id left join employee m ON m.id =e.manager_id  where ? order by e.id',
  [
    {
      "m.id": managerSelectedToViewEmployees,
    },
  ],
  (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results) 
  });
};

module.exports = {
  viewManagerEmployees
}
