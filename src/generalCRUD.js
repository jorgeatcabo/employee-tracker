const connection=require('./connection')
const cTable = require('console.table');

const deleteRow=(table,departmentSelectedTodelete)=>{
  console.log(table)
  connection.query('DELETE FROM ?? WHERE id = ?', [table, departmentSelectedTodelete], function (error, results) {
    if (error) throw error;
  });
}

const generateBudget = () => {
  connection.query('SELECT d.id, d.name, SUM(r.salary) AS Budget FROM department d INNER JOIN role r ON r.department_id= d.id GROUP BY(d.id)', (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results) 
    // for one field
    //results[0].name
  });
};

module.exports = {
    deleteRow,
    generateBudget
}
