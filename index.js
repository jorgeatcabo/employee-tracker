const connection=require('./src/connection')
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputDepartmentMenu,
        inputRoleMenu,
        inputEmployeeMenu,
        inputDepartment,
        inputRole,
        selectDepartment
} = require('./src/inquirer');

const {viewDepartments,readDepartments, createDepartment} = require('./src/departmentCRUD');

const {readRoles,createRole} = require('./src/roleCRUD');

const {readEmployees} = require('./src/employeeCRUD');

const {getColour}= require('./src/asyncFunctions')

//Classes
const Department = require('./lib/Department');
const Role = require('./lib/Role');


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
                            //  //Input for engineer info
                            // const departmentData = await inputDepartment();
                            // let department= new Department(departmentData.departmentname)
                        break;

                        case 'viewEmployees':
                            readEmployees()
                            
                        break;

                   }

                } while( employeeOptionSelected !== 'return' );
        
            break;

            
        }

    } while( mainOption !== 'finish' );
}


    main();



