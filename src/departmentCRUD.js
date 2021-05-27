const connection=require('./connection')
const cTable = require('console.table');

const readDepartments = () => {
  console.log('Selecting all departments...\n');
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results) 
  });
};

module.exports = {
  readDepartments
}
