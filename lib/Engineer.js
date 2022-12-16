const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }
}
getGithub()
getRole("Engineer")
const Engineer1 = new Engineer(data.manager,data.id,data.email,data.github);