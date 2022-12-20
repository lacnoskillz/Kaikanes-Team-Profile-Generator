const Engineer = require('../lib/Engineer');

describe('getrole', ()=> {
    it('gets the users role', () =>{
    const EngineerEl = new Engineer("kai",23,"blah@hotmail.com", "samplegithub");
       expect(EngineerEl.getRole()).toBe("Engineer");
    
});
});

describe('getgithub', ()=> {
    it('gets the users github name', () =>{
    const EngineerEl = new Engineer("kai",23,"blah@hotmail.com", "samplegithub");
       expect(EngineerEl.getGithub()).toBe("samplegithub");
    
});
});