const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputDepartment,
        inputRole,
} = require('./src/inquirer');


const main = async() => {
    let mainOption = '';
    
    do {
        mainOption = await inquirerMenu();
        switch (mainOption) {
            case 'departmentOptions':
                //Select department's option
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
                //Select role's option
                let roleOptionSelected=''
                do {
                    roleOptionSelected = await inputRole();
                    // switch (departmentOption) {
                    //     case 'departmentOptions':

                    //     break;
                    //}
                } while( roleOptionSelected !== 'return' );
        
            break;

        
        }

    } while( mainOption !== 'finish' );
}

main();

