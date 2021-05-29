const connection=require('./connection')

function getDepartments(callback)
{
    connection.query('SELECT * FROM department', function(err, result)
    {
        if (err) 
            callback(err,null,null);
        else
        {
        let deps=result.map((item) => item.name);
            callback(null,deps,result);
        }

    });

}

function getRoles(callback)
{
    connection.query('SELECT * FROM role', function(err, result)
    {
        if (err) 
            callback(err,null,null);
        else
        {
        let rls=result.map((item) => item.title);
            callback(null,rls,result);
        }

    });

}

function getManagers(callback)
{
    connection.query('SELECT * FROM employee', function(err, result)
    {
        if (err) 
            callback(err,null,null);
        else
        {
        let mngrs=result.map((item) => item.first_name);
            mngrs.unshift("None")
            callback(null,mngrs,result);
        }

    });

}

 module.exports = {
    getDepartments,
    getRoles,
    getManagers
 }  