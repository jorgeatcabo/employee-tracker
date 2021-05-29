const connection=require('./connection')
const cTable = require('console.table');

const readRoles = () => {
  connection.query('SELECT role.id, role.title, role.salary, department.name FROM role inner join department where role.department_id =department.id', (err, results) => {
    if (err) throw err;
    console.log(" ")
    console.table(results)    
  });
};

const createRole=(role)=>{
  connection.query('INSERT INTO role SET ?',
        {
          title: role.title,
          salary: role.salary,
          department_id: role.department_id,
        },
        (err) => {
          if (err) throw err;
        }
      );
}

module.exports = {
  readRoles,
  createRole
}
