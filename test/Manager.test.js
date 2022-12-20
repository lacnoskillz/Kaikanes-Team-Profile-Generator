const Manager = require('../lib/Manager');

describe('getrole', ()=> {
    it('gets the users role', () =>{
    const ManagerEl = new Manager("kai",23,"blah@hotmail.com",221);
       expect(ManagerEl.getRole()).toBe("Manager");
    
});
});

describe('getoffice', ()=> {
    it('gets the manager office number', () =>{
    const ManagerEl = new Manager("kai",23,"blah@hotmail.com",221);
       expect(ManagerEl.office).toBe(221);
    
});
});