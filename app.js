//inquirer packages
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// varables to store 
//const Engineer = require()
//const Intern = require()
//const Manager = require()

const employees = []
//function to run node faster
// function initApp(){
//     startHtml();
//     addMember();
// };
// a function to get the data to populate
function addEmployees(){
    inquirer
    .prompt ({
        type: 'input',
        message: 'Enter team member`s name',
        name: 'name'
    },
    {
        type: 'list',
        message: 'select team member`s role',
        name: 'title',
        choices:[
            'Engineer',
            'Intern',
            'Manager'
        ]
    },
    {
        type: 'input',
        message: 'Enter team member`s id',
        name: 'idNumber'
    },
    {
        type: 'input',
        message: 'Enter team member`s email address',
        name: 'email'
    },
    {
        type: 'list',
        name: 'moreEmployees',
        message:'Would you like to add more new Employees?',
        choices:[
            `Yes`,
            `No`
        ]
    },
    {
        type: 'input',
        message: 'What school do you attend?',
        name: 'internSchool'
    },
    {
        type: 'input',
        message: 'What office will this employee have?',
        name: 'officeNumber'
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'githubName'
    }
 )};

fs.writeFile();

    