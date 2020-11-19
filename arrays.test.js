const { assert } = require('chai');
const arrays = require('../Arrays.js');

describe('arrays methods', () => {
    describe('searchMinElement', () => {
        it('should is defined', () => {
            assert.isDefined(arrays.serchMinElement);
        });

        it('should return Bye', () => {
            const arg = "Hi";
            const expected = "аргумент не являеться массивом";
        
            const actual = arrays.serchMinElement(arg);

            assert.strictEqual(actual, expected);
        
        });

        it('should return minimal element 1', () => {
           const array = [3, 1, 4];
           const expected = 1;

           const actual = arrays.serchMinElement(array);
           
           assert.deepEqual(actual, expected);

        });

        it('should return minimal element -5', () => {
          
           const array = [8, -5, 1];
           const expected = -5;

           const actual = arrays.serchMinElement(array);
           
           assert.deepEqual(actual, expected);

        });

        it('should return minimal element -8', () => {
          
            const array = [-8, 0, 2566];
            const expected = -8;
 
            const actual = arrays.serchMinElement(array);
            
            assert.deepEqual(actual, expected);
 
         });

         it('should return minimal element 0', () => {
          
            const array = [0, 0, 0];
            const expected = 0;
 
            const actual = arrays.serchMinElement(array);
            
            assert.deepEqual(actual, expected);
 
         });
    });
});

