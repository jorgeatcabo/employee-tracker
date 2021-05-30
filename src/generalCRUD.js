const connection=require('./connection')
const cTable = require('console.table');

const deleteRow=(table,departmentSelectedTodelete)=>{
  console.log(table)
  connection.query('DELETE FROM ?? WHERE id = ?', [table, departmentSelectedTodelete], function (error, results) {
    if (error) throw error;
  });
}


module.exports = {
    deleteRow
}
