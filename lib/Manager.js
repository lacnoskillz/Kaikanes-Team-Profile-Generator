const Employee = require("./Employee");

class Managers extends Employee {
    constructor(name,id,email,office){
        super(name,id,email);
        this.office = office;
    }
}
getRole("Manager")
const Manager1 = new Managers(data.manager,data.id,data.email,data.office);