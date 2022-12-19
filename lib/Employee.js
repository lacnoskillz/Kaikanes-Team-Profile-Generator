class Employee {
    constructor(name, id, email){
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName(){
        return this.name;

    }
    getID(){
      return this.id;
    }
    getEmail(){
      return this.email;
    }
    getRole(){
      return 'Employee'

    }
    add(){
        let c = 0;
      c = this.a + this.b;
      return c;
  }
  }
  
  module.exports = Employee;