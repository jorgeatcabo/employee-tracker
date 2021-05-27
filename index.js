const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputDepartment,
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
        
        }

    } while( mainOption !== 'finish' );
}

main();

