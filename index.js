const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputDepartment,
        inputRole,
        inputEmployee
} = require('./src/inquirer');


const main = async() => {
    let mainOption = '';
    
    do {
        mainOption = await inquirerMenu();
        switch (mainOption) {
            case 'departmentOptions':
                let departmentOptionSelected=''
                do {
                    departmentOptionSelected = await inputDepartment();
                    // switch (departmentOption) {
                    //     case 'departmentOptions':

                    //     break;
                    //}
                } while( departmentOptionSelected !== 'return' );
        
            break;


            case 'roleOptions':
                let roleOptionSelected=''
                do {
                    roleOptionSelected = await inputRole();
                    // switch (departmentOption) {
                    //     case 'departmentOptions':

                    //     break;
                    //}
                } while( roleOptionSelected !== 'return' );
        
            break;

            case 'employeeOptions':
                let employeeOptionSelected=''
                do {
                    employeeOptionSelected = await inputEmployee();
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

