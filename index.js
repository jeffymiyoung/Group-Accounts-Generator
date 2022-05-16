// Start of Code
// Require consts for packages
const fs = require('fs');
const inquirer = require('inquirer');
const validator = require('email-validator');

// Require Employee Roles
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Require #templateHTML Link to Create Page
const templateHTML = require('./src/templateHTML');

// Employee Team Array
const teamArray = [];

// Start Prompt - asking whose Manager first
const managerPrompt = () => {
    console.log(`
    =================
    Creating Manager Profile
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager of this Team/Company?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's Employee ID #:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's Employee ID #!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's Email Address:",
            validate: emailInput => {
                emailValid = validator.validate(emailInput);
                if (emailValid) {
                    return true;
                } else {
                    console.log("Please enter the Manager's Email Address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's Office Number:",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's Office Number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        // console.log(manager);
    })
};

const employeePrompt = () => {
    console.log(`
    =================
    Adding Employees Profile to Team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the role of the Employee you'd like to add:",
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the Employee you'd like to add?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter their Employee's ID Number:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter their Employee's ID #!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Employee's Email Address:",
            validate: emailInput => {
                emailValid = validator.validate(emailInput);
                if (emailValid) {
                    return true;
                } else {
                    console.log("Please enter their Employee's Email Address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's GitHub Username:",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's GitHub Username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's School:",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's School!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdditional',
            message: "Would you like to add more Employee Team Members?",
            default: false,
        },
    ])
    .then(employeeInput => {
        let { name, id, email, role, github, school, confirmAdditional } = employeeInput;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } 
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        teamArray.push(employee);
        // console.log(teamArray);

        if (confirmAdditional) {
            return employeePrompt(teamArray);
        } else {
            return teamArray;
        }
    })
};

// writeFile to /dist with data from prompt and templateHTML
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {

        // error catching
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Company Accounts Profile has been successfully created! Please check out the index.html!");
        }
    })
};

managerPrompt()
    .then(employeePrompt)
    .then(teamArray => {
        return templateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });