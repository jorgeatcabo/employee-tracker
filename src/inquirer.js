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
            value: 'viewDepartments',
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
            value: 'viewRoles',
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
            value: 'viewEmployees',
            name: 'View Employee:'
        },
        {
          value: 'updateRole',
          name: 'Update employee\'s role:'
        },
        {
          value: 'return',
          name: 'Return main menu'
        },
    
    ]
}
]

const department = [    
  {
      type: 'input',
      message: 'Department\'s name:',
      name: 'departmentname',
    },
]

const inquirerMenu = async() => {

    const { mainOptionSelected } = await inquirer.prompt(mainOptions);

    return mainOptionSelected;
}


const inputDepartmentMenu = async() => {
   
  const { departmentOptionSelected } = await inquirer.prompt(departmentOptions);

  return departmentOptionSelected;
}

const inputRoleMenu = async() => {
   
  const { roleOptionSelected } = await inquirer.prompt(roleOptions);

  return roleOptionSelected;
}

const inputEmployeeMenu = async() => {
   
  const { employeeOptionSelected } = await inquirer.prompt(employeeOptions);

  return employeeOptionSelected;
}

const inputDepartment = async() => {
  const departmentData = await inquirer.prompt(department);
  return departmentData;
}


module.exports = {
    inquirerMenu,    
    inputDepartmentMenu,
    inputRoleMenu,
    inputEmployeeMenu,
    inputDepartment
}
