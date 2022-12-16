
const Employee = require('../lib/Employee');

describe('addition', ()=> {
    it('adds two digits together', () =>{
    const numbers = new Employee(1,2);
       expect(numbers.add()).toBe(3);
    
});
});