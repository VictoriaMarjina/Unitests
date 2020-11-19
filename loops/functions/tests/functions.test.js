const { assert } = require('chai');
const functions = require('../Functions.js');

describe('functions methods', () => {
    describe('getDayName', () => {  
        it('should return В неделе 7 дней. Введите число в диапазоне 1-7.', () => {
           const arg = 8;
           const expected = "В неделе 7 дней. Введите число в диапазоне 1-7.";

           const actual = loops.getDayName(arg);
           
           assert.strictEqual(actual, expected);

        });

        it('should return Данные не были введены либо был введен ноль', () => {
            const arg = 0;
            const expected = "Данные не были введены либо был введен ноль";
 
            const actual = loops.getDayName(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return Данные не соответствуют условию задачи', () => {
            const arg = "hi";
            const expected = "Данные не соответствуют условию задачи";
 
            const actual = loops.getDayName(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return Пятница', () => {
            const arg = 5;
            const expected = "Пятница";
 
            const actual = loops.getDayName(arg);
            
            assert.strictEqual(actual, expected);
 
         });
    });
});