const connection=require('./connection')

const viewDepartments = () => {
  console.log('Selecting all departments...\n');
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
});

module.exports = {
  viewDepartments
}
