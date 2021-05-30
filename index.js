const connection=require('./src/connection')
const inquirer = require('inquirer');
const { inquirerMenu, 
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
} = require('./src/inquirer');

const {viewDepartments, createDepartment} = require('./src/departmentCRUD');

const {readRoles,createRole} = require('./src/roleCRUD');

const {readEmployees,createEmployee,updateEmployee,updateEmployeeManager} = require('./src/employeeCRUD');

//Classes
const Department = require('./lib/Department');
const Role = require('./lib/Role');
const Employee = require('./lib/Employee');


const main = async() => {
    let mainOption = '';
    
    do {
        mainOption = await inquirerMenu();
        switch (mainOption) {

            case 'departmentOptions':
                let departmentOptionSelected=''
                do {
                    departmentOptionSelected = await inputDepartmentMenu();
                    switch (departmentOptionSelected) {
                        
                        case 'addDepartment':
                             //Input for department info
                            const departmentData = await inputDepartment();
                            let department= new Department(departmentData.departmentname)
                            createDepartment(department)
                        break;

                        case 'viewDepartments':
                            viewDepartments()
                       break;


                   }
                } while( departmentOptionSelected !== 'return' );
        
            break;


            case 'roleOptions':
                let roleOptionSelected=''
                do {
                    roleOptionSelected = await inputRoleMenu();
                    switch (roleOptionSelected) {
                        
                        case 'addRole':
                             //Input for role info
                             const roleData = await inputRole();
                             const departmentSelected=await selectDepartment()
                             let role= new Role(roleData.roletitle,roleData.rolesalary,departmentSelected)
                             createRole(role)
                        break;

                        case 'viewRoles':
                            readRoles()
                        break;

                   }

                } while( roleOptionSelected !== 'return' );
        
            break;

            case 'employeeOptions':
                let employeeOptionSelected=''
                do {
                    employeeOptionSelected = await inputEmployeeMenu();
                    switch (employeeOptionSelected) {
                        
                        case 'addEmployee':
                             //Input for employee info
                             const employeeData = await inputEmployee();
                             const roleSelected=await selectRole()
                             let managerSelected=await selectManager()
                             let employee= new Employee(employeeData.employeefirstname,employeeData.employeelastname,roleSelected,managerSelected)
                             createEmployee(employee)
                        break;

                        case 'viewEmployees':
                            readEmployees()
                        break;

                        case 'updateRole':
                            let employeeSelected=await selectEmployee()
                            employeeSelected= parseInt(employeeSelected)
                            let employeeRoleSelected=await selectRole()
                            employeeRoleSelected= parseInt(employeeRoleSelected)
                            updateEmployee(employeeRoleSelected,employeeSelected)
                            
                        break;

                        case 'updateManager':
                            let employeeSelectedToUpdate=await selectEmployee()
                            employeeSelectedToUpdate= parseInt(employeeSelectedToUpdate)
                            let managerSelectedToUpdate=await selectManager()
                            managerSelectedToUpdate= parseInt(managerSelectedToUpdate)
                            updateEmployeeManager(managerSelectedToUpdate,employeeSelectedToUpdate)
                            
                        break;                       

                   }

                } while( employeeOptionSelected !== 'return' );
        
            break;

            
        }

    } while( mainOption !== 'finish' );
}


    main();




