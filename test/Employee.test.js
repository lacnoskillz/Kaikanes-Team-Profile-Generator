
const Employee = require('../lib/Employee');

describe('getname', ()=> {
    it('gets the users name', () =>{
    const EmployeeEl = new Employee("kai",23,"blah@hotmail.com");
       expect(EmployeeEl.getName()).toBe("kai");
    
});
});

describe('getid', ()=> {
    it('gets the users id', () =>{
    const EmployeeEl = new Employee("kai",23,"blah@hotmail.com");
       expect(EmployeeEl.getID()).toBe(23);
    
});
});

describe('getemail', ()=> {
    it('gets the users email', () =>{
    const EmployeeEl = new Employee("kai",23,"blah@hotmail.com");
       expect(EmployeeEl.getEmail()).toBe("blah@hotmail.com");
    
});
});
describe('getrole', ()=> {
    it('gets the users role', () =>{
    const EmployeeEl = new Employee("kai",23,"blah@hotmail.com");
       expect(EmployeeEl.getRole()).toBe("Employee");
    
});
});