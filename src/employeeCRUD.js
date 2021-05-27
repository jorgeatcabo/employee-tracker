const connection=require('./connection')
const cTable = require('console.table');

const readEmployees = () => {
  console.log('Selecting all employees...\n');
  connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee inner join role where employee.role_id =role.id', (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results)    
  });
};





module.exports = {
  readEmployees
}
