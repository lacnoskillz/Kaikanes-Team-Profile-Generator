
const Sampleclass = require('../index');

describe('addition', ()=> {
    it('adds two digits together', () =>{
    const numbers = new Sampleclass(1,2);
       expect(numbers.add()).toBe(3);
    
});
});