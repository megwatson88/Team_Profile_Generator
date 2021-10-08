//npm packages set up 
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
const { writeFileSync } = require('fs');

// This is where the code ref back to the classes created in a different folder. 
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

const path = require("path");
const Employee = require('./lib/employee.js');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");


const employees = []
const employeeID = [];


// a function to get the data to populate
//start with the manager then move to other employees
function buildTeam() {
    function addManager() {
        console.log(`Let's start with the manager.`);
        inquirer
            //questions to ask: name, id, email, office number, 
            .prompt([{
                name: "managerName",
                type: "input",
                message: "Who is the team manager?"
            },
            {
                name: "managerId",
                type: "input",
                message: "What is the manager's ID number?"
            },
            {
                name: "managerEmail",
                type: "input",
                message: "What is the manager's email?"
            },
            {
                name: "officeNumber",
                type: "input",
                message: "Please enter the managers office number."
            },
            ]).then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
                employees.push(manager);
                //idArray.push(answers.ManagerID);
                addEmployees();
            })

    };
    //addManager();
    function addEmployees() {
        console.log(`Let's build your team!`)
        inquirer
            .prompt([{
                type: 'input',
                message: 'Enter team member`s name',
                name: 'name',
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log(`Please enter the name`);
                        return false
                    }
                }

            },
            {
                type: 'list',
                message: 'select team member`s role',
                name: 'title',
                choices: [
                    'Engineer',
                    'Intern'
                ]
            },
            {
                type: 'number',
                message: 'Enter team member`s id',
                name: 'idNumber',
                // make sure the anser is a number 
                validate: idNumber => {
                    var done = this.async
                    if (typeof (idNumber) === "number") {
                        return true;
                    }
                    return "Please enter an ID Number"
                }
            },
            {
                type: 'input',
                message: 'Enter team member`s email address',
                name: 'email',
            },
            {
                type: 'input',
                message: 'If adding an intern What school did they attend? ',
                name: 'internSchool'
            },
            {
                type: 'input',
                message: 'If adding an engineer What is your GitHub Username?',
                name: 'githubName'
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
            ])
            .then(function (employeeInfo) {
                let newEmployee;
                if (employeeInfo.title === "Engineer") { //update with employeeInfo. to all the fields
                    newEmployee = new Engineer(employeeInfo.name, employeeInfo.idNumber, employeeInfo.email, employeeInfo.title, employeeInfo.githubName)
                } else if (employeeInfo.title === "Intern") {
                    newIntern = new Intern(employeeInfo.name, employeeInfo.idNumber, employeeInfo.email, employeeInfo.school, employeeInfo.githubName)
                }

                employees.push(newEmployee);

                if (employeeInfo.moreEmployees === "yes") {
                    addEmployees();
                } else {
                    makeHTML();
                }
            })
    };
    addManager();
}
buildTeam();
function makeHTML() {
    let HTML = beginHTML()
    let content = ""
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i])
        content += "<div'>" + employees[i].name + "<br>" + employees[i].title + "<br>" + "<a href = mailto: >" + employees[i].email + "</a>" + "<a href = 'https://github.com/'>" + employees[i].githubName + "</a>" + "</div>"


    }
    HTML = HTML.replace("{{body}}", content)
    //console.log(HTML)
    fs.writeFileSync("employees.html", HTML, "utf-8")
}
//write into a file called message.txt, passing in the value of the data variable. if there's an error, the cb function will throw the error; otherwise, prints 'The file has been saved!'
//work through the classes and test with those classes 
// ie when you call mangaer add the specific data into an array that cor to manager.
// work through classes > go through the testing > adding in the HTML though the classes 

//begin HTML functions 
function beginHTML() {
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
        <div class = "container"> 
            <div class="row">  
            {{body}}
            </div>
            
        </div>
    </body>
    </html>`
    return html

};

