//create classes go back to activites on how to create classes. 
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    getEmployeeRole(){
        return "Engineer";
    };
    getGitHubUser(){
        return this.github
    }
}

module.exports = Engineer;
