const Intern = require('../lib/Intern');

describe('getname', ()=> {
    it('gets the users school name', () =>{
    const InternEl = new Intern("kai",23,"blah@hotmail.com","coolschool");
       expect(InternEl.getSchool()).toBe("coolschool");
    
});
});

describe('getrole', ()=> {
    it('gets the users role', () =>{
    const InternEl = new Intern("kai",23,"blah@hotmail.com", "coolschool");
       expect(InternEl.getRole()).toBe("Intern");
    
});
});