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

 module.exports = {
    getDepartments
 }  