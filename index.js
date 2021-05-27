const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputDepartmentMenu,
        inputRoleMenu,
        inputEmployeeMenu,
        inputDepartment
} = require('./src/inquirer');

const {readDepartments
} = require('./src/departmentCRUD');

const {viewRoles
} = require('./src/roleCRUD');

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
                             //Input for engineer info
                            const departmentData = await inputDepartment();
                            let department= new Department(departmentData.departmentname)
                        break;

                        case 'viewDepartments':
                            readDepartments()
                            
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
                            //  //Input for engineer info
                            // const departmentData = await inputDepartment();
                            // let department= new Department(departmentData.departmentname)
                        break;

                        case 'viewRoles':
                            viewRoles()
                            
                        break;

                   }

                } while( roleOptionSelected !== 'return' );
        
            break;

            case 'employeeOptions':
                let employeeOptionSelected=''
                do {
                    employeeOptionSelected = await inputEmployeeMenu();
                    // switch (departmentOption) {
                    //     case 'departmentOptions':

                    //     break;
                    //}
                } while( employeeOptionSelected !== 'return' );
        
            break;

            
        }

    } while( mainOption !== 'finish' );
}

main();

