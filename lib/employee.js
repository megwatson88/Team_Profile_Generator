class Employee{
    constructore(name, id, emial){
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName(){
    return this.name;
};

getEmployeeId(){
    return this.id;
};

getEmployeeEmail(){
    return this.email;
};

getTeamRole(){
    return "Employee";
};
};

module.exports = Employee;