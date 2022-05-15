// Start of Code
// Require consts for packages
const fs = require('fs');
const inquirer = require('inquirer');

// Require Employee Roles
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Require #templateHTML Link to Create Page
const templateHTML = require('./src/templateHTML');

// Employee Team Array
const teamArray = [];

// Start Prompt - asking whose Manager first
const addManager = () => {
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
            message: "Please enter your Employee ID #:",
        }
    ])
}

