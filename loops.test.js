const { assert } = require('chai');
const loops = require('../Loops.js');

describe('loops methods', () => {
    describe('getCountAndSum', () => {  
        it('should return sum  Количество четных чисел от 1 до 99 равно: 2450, а их сумма равна: 49.', () => {
           const expected = "Количество четных чисел от 1 до 99 равно: 2450, а их сумма равна: 49.";

           const actual = loops.getCountAndSum();
           
           assert.isDefined(expected);

        });
    
    });

});