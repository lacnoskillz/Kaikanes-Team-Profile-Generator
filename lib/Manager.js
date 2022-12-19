const Employee = require("./Employee");

class Managers extends Employee {
    constructor(name,id,email,office){
        super(name,id,email);
        this.office = office;
    }
    getRole(){
        return "Manager"
    }
}
module.exports = Managers;
