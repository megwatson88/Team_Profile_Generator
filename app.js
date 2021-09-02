//inquirer packages
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// varables to store 
// This is where the code ref back to the classes created in a different folder. 

// const Engineer = require('./lib/engineer.js')
// const Intern = require()
// const Manager = require()

const employees = []
//function to run node faster
// function initApp(){
//     startHtml();
//     addMember();
// };

function generateName(firstName) {
    return `${firstname}`;
};

function generateTitle(title) {
    return `${title}`;
};

function generateTeamMemberId(idNumber) {
    return `${idNumber}`
}

// a function to get the data to populate
function addEmployees() {
    inquirer
        .prompt([{
            type: 'input',
            message: 'Enter team member`s name',
            name: 'name'
        },
        {
            type: 'list',
            message: 'select team member`s role',
            name: 'title',
            choices: [
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
            message: 'Would you like to add more new Employees?',
            choices: [
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
        }])
        .then(answers => {
            console.log(answers)
            let results = '' 
            const data = JSON.stringify(answers)
            fs.writeFile('./Team_Profile_Generator', data,
                err => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
        })
}
addEmployees();

  //write into a file called message.txt, passing in the value of the data variable. if there's an error, the cb function will throw the error; otherwise, prints 'The file has been saved!'
//work through the classes and test with those classes 
// ie when you call mangaer add the specific data into an array that cor to manager.
// work through classes > go through the testing > adding in the HTML though the classes 
