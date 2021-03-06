
const inquirer = require('inquirer');
const {getDepartments,getRoles,getManagers,getEmployees}= require('./asyncFunctions')

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
              value: 'managerOptions',
              name: 'Manager menu:'
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
          value: 'deleteDepartment',
          name: 'Delete Department:'
        },
        {
          value: 'generateBudget',
          name: 'Generate budget'
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
          value: 'deleteRole',
          name: 'Delete Role:'
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
            name: 'View Employees:'
        },
        {
          value: 'updateRole',
          name: 'Update employee\'s role:'
        },
        {
          value: 'updateManager',
          name: 'Update employee\'s manager:'
        },
        {
          value: 'deleteEmployee',
          name: 'Delete employee:'
        },              
        {
          value: 'return',
          name: 'Return main menu'
        },
    
    ]
}
]

const managerOptions = [    
  {
    type: 'list',
    name: 'managerOptionSelected',
    message: 'Manger Menu:',
    choices: [
        {
            value: 'viewManagerEmployees',
            name: 'View Manger\'s Employees:'
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

const employee = [    
  {
    type: 'input',
    message: 'Employee first name:',
    name: 'employeefirstname',
  },
  {
    type: 'input',
    message: 'Employee last name:',
    name: 'employeelastname',
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

const inputManagerMenu = async() => {
   
  const { managerOptionSelected } = await inquirer.prompt(managerOptions);

  return managerOptionSelected;
}

const inputDepartment = async() => {
  const departmentData = await inquirer.prompt(department);
  return departmentData;
}

const inputRole = async() => {
  const roleData = await inquirer.prompt(role);
  return roleData;
}

const inputEmployee = async() => {
  const employeeData = await inquirer.prompt(employee);
  return employeeData;
}


const selectDepartment = async() => {
 const [departments, results]=SyncFunction("department")
 
  const departmentSelected = await inquirer.prompt(departments);
  const chosenItem = results.find(
    (item) => item.name === departmentSelected.choice
  );
  return chosenItem.id;
}

const selectRole = async() => {
  const [roles, results]=SyncFunction("role")
  
   const roleSelected = await inquirer.prompt(roles);
   const chosenItem = results.find(
     (item) => item.title === roleSelected.choice
   );
   return chosenItem.id;
 }

 const selectManager = async() => {
  const [managers, results]=SyncFunction("manager")
  
   const managerSelected = await inquirer.prompt(managers);
   let chosen=null
   if (managerSelected.choice!=="None"){
      const chosenItem = results.find(
        (item) => item.first_name === managerSelected.choice
      );
      chosen= chosenItem.id;
   }
   return chosen
 }


 const selectEmployee = async() => {
  const [employees, results]=SyncFunction("employee")
  
   const employeeSelected = await inquirer.prompt(employees);
      const chosenItem = results.find(
        (item) => item.first_name === employeeSelected.choice
      );
      return chosenItem.id;
 }

function SyncFunction(table){
  var departments,roles,managers,employees
 
  switch (table) {
    case "department":
        getDepartments (function(err,deps,results){
          if (err) {
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

         break;
  
    case "role":
    getRoles (function(err,rls,results){
      if (err) {
          console.log("ERROR : ",err);            
      } else {            
          roles = [      
            {
              name: 'choice',
              type: 'rawlist',
              choices:rls,
              message: 'Role?',
            },
          ]   
          res=results
      }    
    }

    );
      while(roles === undefined) {
        require('deasync').sleep(100);
      }
      return [roles,res];    

      break;  
    
    case "manager":
      getManagers (function(err,mngrs,results){
        if (err) {
            console.log("ERROR : ",err);            
        } else {            
          managers = [      
              {
                name: 'choice',
                type: 'rawlist',
                choices:mngrs,
                message: 'Manager?',
              },
            ]   
            res=results
        }    
      }
  
      );
        while(managers === undefined) {
          require('deasync').sleep(100);
        }
        return [managers,res];    
  
        break;  

    case "employee":
      getEmployees (function(err,emplys,results){
        if (err) {
            console.log("ERROR : ",err);            
        } else {            
          employees = [      
              {
                name: 'choice',
                type: 'rawlist',
                choices:emplys,
                message: 'Employee?',
              },
            ]   
            res=results
        }    
      }
  
      );
        while(employees === undefined) {
          require('deasync').sleep(100);
        }
        return [employees,res];    
  
        break;  


}
      
}

module.exports = {
    inquirerMenu,    
    inputDepartmentMenu,
    inputRoleMenu,
    inputEmployeeMenu,
    inputDepartment,
    inputRole,
    inputEmployee,
    selectDepartment,
    selectRole,
    selectManager,
    selectEmployee,
    inputManagerMenu,
}
