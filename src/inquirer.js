
const inquirer = require('inquirer');
const {getDepartments}= require('./asyncFunctions')

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
      message: 'Department name:',
      name: 'departmentname',
    },
]

const role = [    
  {
    type: 'input',
    message: 'Role title:',
    name: 'roletitle',
  },
  {
    type: 'input',
    message: 'Role salary:',
    name: 'rolesalary',
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

const inputRole = async() => {
  const roleData = await inquirer.prompt(role);
  return roleData;
}

const selectDepartment = async() => {
 const [departments, results]=SyncFunction()
 
  const departmentSelected = await inquirer.prompt(departments);
  const chosenItem = results.find(
    (item) => item.name === departmentSelected.choice
  );
  return chosenItem.id;
}



function SyncFunction(){
  var departments
 
  //call Fn for db query with callback
 getDepartments (function(err,deps,results){
  if (err) {
      // error handling code goes here
      console.log("ERROR : ",err);            
  } else {            
      departments = [      
        {
          name: 'choice',
          type: 'rawlist',
          choices:deps,
          message: 'Department?',
        },
      ]   
      res=results
  }    
}

);
  while(departments === undefined) {
    require('deasync').sleep(100);
  }
  return [departments,res];    
}

module.exports = {
    inquirerMenu,    
    inputDepartmentMenu,
    inputRoleMenu,
    inputEmployeeMenu,
    inputDepartment,
    inputRole,
    selectDepartment,
}
