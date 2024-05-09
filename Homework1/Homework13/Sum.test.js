const {sum} = require('./Sum.js');


describe('Adding numbers', () =>
{
    test("expect 0.1 + 0.2 = 0.3", () => {
        expect(sum(0.1,0.2)).toBeCloseTo(0.3);
    } )
} )