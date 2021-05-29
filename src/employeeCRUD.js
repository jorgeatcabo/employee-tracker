const connection=require('./connection')
const cTable = require('console.table');

const readEmployees = () => {
  connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee inner join role where employee.role_id =role.id', (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results)    
  });
};





module.exports = {
  readEmployees
}
