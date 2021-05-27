const connection=require('./connection')
const cTable = require('console.table');

const readRoles = () => {
  console.log('Selecting all roles...\n');
  connection.query('SELECT role.id, role.title, role.salary, department.name FROM role inner join department where role.department_id =department.id', (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results)    
  });
};





module.exports = {
  readRoles
}
