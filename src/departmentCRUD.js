const connection=require('./connection')
const cTable = require('console.table');

const readDepartments = () => {
  console.log('Selecting all departments...\n');
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.table(['id', 'name'],results)    
  });
};




// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
});

module.exports = {
  readDepartments
}
