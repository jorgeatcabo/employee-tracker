const inquirer = require('inquirer');

const mainOptions = [
    {
        type: 'list',
        name: 'mainOptionSelected',
        message: 'Main menu:',
        choices: [
            {
                value: 'departmentOptions',
                name: 'Department menu:'
            },
            {
                value: 'roleOptions',
                name: 'Role menu:'
            },
            {
                value: 'employeeOptions',
                name: 'Employee menu:'
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
    message: 'Department Menu:',
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
          name: 'Return main menu'
        },
    
    ]
}
]

const roleOptions = [    
  {
    type: 'list',
    name: 'roleOptionSelected',
    message: 'Role Menu:',
    choices: [
        {
            value: 'addRole',
            name: 'Add Role:'
        },
        {
            value: 'viewRole',
            name: 'View Roles:'
        },
        {
          value: 'return',
          name: 'Return main menu'
        },
    
    ]
}
]

const employeeOptions = [    
  {
    type: 'list',
    name: 'employeeOptionSelected',
    message: 'Employee Menu:',
    choices: [
        {
            value: 'addEmployee',
            name: 'Add Employee:'
        },
        {
            value: 'viewEmployee',
            name: 'View Employee:'
        },
        {
          value: 'return',
          name: 'Return main menu'
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

const inputRole = async() => {
   
  const { roleOptionSelected } = await inquirer.prompt(roleOptions);

  return roleOptionSelected;
}

const inputEmployee = async() => {
   
  const { employeeOptionSelected } = await inquirer.prompt(employeeOptions);

  return employeeOptionSelected;
}

module.exports = {
    inquirerMenu,    
    inputDepartment,
    inputRole,
    inputEmployee
}
