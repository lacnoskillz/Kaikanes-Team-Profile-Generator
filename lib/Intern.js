const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
}
getSchool()
getRole("Intern")
const Intern1 = new Intern(data.manager,data.id,data.email,data.school);