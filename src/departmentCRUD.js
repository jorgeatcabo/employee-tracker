const connection=require('./connection')
const cTable = require('console.table');

const readDepartments = () => {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    return results
  });
};

const viewDepartments = () => {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results) 
    // for one field
    //results[0].name
  });
};


const createDepartment=(department)=>{
  connection.query('INSERT INTO department SET ?',
  {
    name: department.name,
  }, (err, results) => {
    if (err) throw err;
  });
                            

}

module.exports = {
  viewDepartments,
  readDepartments,
  createDepartment,
}
