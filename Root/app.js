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
        .then(function(employeeInfo){
            let newEmployee;
            if (title === "Engineer"){
                newEmployee = new Engineer(name, idNumber, email, title, githubName)
            } else if (title === "Intern"){
                newIntern = new Intern(name, idNumber, email, school, githubName)
            } else if (title === "Manager"){
                newManger = new Manager (name, idNumber, email, title, officeNumber)
            }
    
            employees.push(newEmployee);
            startHtml(newEmployee)
            .then(function(){
                if (moreEmployees === "yes"){
                    addEmployees();
                } else {
                    makeHTML();
                }
            })
        })
};
addEmployees();

  //write into a file called message.txt, passing in the value of the data variable. if there's an error, the cb function will throw the error; otherwise, prints 'The file has been saved!'
//work through the classes and test with those classes 
// ie when you call mangaer add the specific data into an array that cor to manager.
// work through classes > go through the testing > adding in the HTML though the classes 

    //begin HTML functions 
function beginHTML(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <nav class= "navbar" style = " background-color: slateblue; color: white;" > 
            <span class = "brandname"> Company Name </span>
        </nav>
        <div class = " container"> 
            <div class="row"> </div>
            
        </div>
    </body>
    </html>`
    };
    beginHTML()
