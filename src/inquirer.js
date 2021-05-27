const inquirer = require('inquirer');

const mainOptions = [
    {
        type: 'list',
        name: 'mainOptionSelected',
        message: 'What would you like to do?',
        choices: [
            {
                value: 'departmentOptions',
                name: 'Department\'s options:'
            },
            {
                value: 'roleOptions',
                name: 'Role\'s options:'
            },
            {
                value: 'employeeOptions',
                name: 'Employee\'s options:'
            },
            {
              value: 'finish',
              name: 'Finish'
            },
        
        ]
    }
];

const departmentOptions = [    
  {
    type: 'list',
    name: 'departmentOptionSelected',
    message: 'Department\'s Options:',
    choices: [
        {
            value: 'addDepartment',
            name: 'Add Department:'
        },
        {
            value: 'viewDepartment',
            name: 'View Departments:'
        },
        {
          value: 'return',
          name: 'Return'
        },
    
    ]
}
]



const inquirerMenu = async() => {

    const { mainOptionSelected } = await inquirer.prompt(mainOptions);

    return mainOptionSelected;
}


const inputDepartment = async() => {
   
  const { departmentOptionSelected } = await inquirer.prompt(departmentOptions);

  return departmentOptionSelected;
}



module.exports = {
    inquirerMenu,    
    inputDepartment
}
