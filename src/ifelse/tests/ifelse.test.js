const { assert } = require('chai');
const ifelse = require('../Ifelse.js');

describe('ifelse methods', () => {
    describe('findResult', () => {  
        it('should return 16', () => {
           const arg1 = 8;
           const arg2 = 2;
           const expected = 16;

           const actual = ifelse.findResult(arg1, arg2);
           
           assert.strictEqual(actual, expected);

        });
        it('should return Данные не были введены', () => {
            const arg1 = "";
            const arg2 = 2;
            const expected = "Данные не были введены";
 
            const actual = ifelse.findResult(arg1, arg2);
            
            assert.strictEqual(actual, expected);
 
         });
         it('should return Данные не соответствуют условию задачи', () => {
            const arg1 = 8;
            const arg2 = "git";
            const expected = "Данные не соответствуют условию задачи";
 
            const actual = ifelse.findResult(arg1, arg2);
            
            assert.strictEqual(actual, expected);
 
         });
         it('should return 61', () => {
            const arg1 = 59;
            const arg2 = 2;
            const expected = 61;
 
            const actual = ifelse.findResult(arg1, arg2);
            
            assert.strictEqual(actual, expected);
 
         });
      
    });
    describe('findSum', () => {  
        it('should return 55', () => {
           const arg1 = 0;
           const arg2 = -20;
           const arg3 = 55;
           const expected = 55;

           const actual = ifelse.findSum(arg1, arg2, arg3);
           
           assert.strictEqual(actual, expected);

        });
        it('should return Данные не были введены', () => {
            const arg1 = "" ;
            const arg2 = 58;
            const arg3 = 1;
            const expected = "Данные не были введены";
 
            const actual = ifelse.findSum(arg1, arg2, arg3);
            
            assert.strictEqual(actual, expected);
 
         });
         it('should return Данные не соответствуют условию задачи', () => {
            const arg1 = "dev";
            const arg2 = 20;
            const arg3 = 55;
            const expected = "Данные не соответствуют условию задачи";
 
            const actual = ifelse.findSum(arg1, arg2, arg3);
            
            assert.strictEqual(actual, expected);
 
         });
         it('should return Положительные числа не были введены', () => {
            const arg1 = 0;
            const arg2 = -20;
            const arg3 = 0;
            const expected = "Положительные числа не были введены";
 
            const actual = ifelse.findSum(arg1, arg2, arg3);
            
            assert.strictEqual(actual, expected);
 
         });

    });
    describe('findPlace', () => {  
        it('should return Точка расположена на оси y между 3 и 4 координатными плоскостями', () => {
           const arg1 = 0;
           const arg2 = -20;
           const expected = "Точка расположена на оси y между 3 и 4 координатными плоскостями";

           const actual = ifelse.findPlace(arg1, arg2);
           
           assert.strictEqual(actual, expected);

        });
        it('should return 1', () => {
            const arg1 = 8;
            const arg2 = 5;
            const expected = 1;
 
            const actual = ifelse.findPlace(arg1, arg2);
            
            assert.strictEqual(actual, expected);
 
         });
         it('should return Точка расположена в начале координат', () => {
            const arg1 = 0;
            const arg2 = 0;
            const expected = "Точка расположена в начале координат";
 
            const actual = ifelse.findPlace(arg1, arg2);
            
            assert.strictEqual(actual, expected);
 
         });
         it('should return Точка расположена на оси х между 2 и 3 координатными плоскостями', () => {
            const arg1 = -8;
            const arg2 = 0;
            const expected = "Точка расположена на оси х между 2 и 3 координатными плоскостями";
 
            const actual = ifelse.findPlace(arg1, arg2);
            
            assert.strictEqual(actual, expected);
 
         });
         
    });
    describe('checkEvaluation', () => {  
        it('should return Оценка соответствующая указанному рейтингу отсутствует в базе данных', () => {
           const arg = 101;
           const expected = "Оценка соответствующая указанному рейтингу отсутствует в базе данных";

           const actual = ifelse.checkEvaluation(arg);
           
           assert.strictEqual(actual, expected);

        });
        it('should return E', () => {
            const arg = 30;
            const expected = "E";
 
            const actual = ifelse.checkEvaluation(arg);
            
            assert.strictEqual(actual, expected);
 
        });
        it('should return Данные не соответствуют условию задачи', () => {
            const arg = "dev";
            const expected = "Данные не соответствуют условию задачи";
 
            const actual = ifelse.checkEvaluation(arg);
            
            assert.strictEqual(actual, expected);
 
        });
        it('should return Оценка соответствующая указанному рейтингу отсутствует в базе данных', () => {
            const arg = -55;
            const expected = "Оценка соответствующая указанному рейтингу отсутствует в базе данных";
 
            const actual = ifelse.checkEvaluation(arg);
            
            assert.strictEqual(actual, expected);
 
        });
     
    });
    describe('findSumMax', () => {  
        it('should return Данные не были введены', () => {
           const arg1 = "";
           const arg2 = 1;
           const arg3 = 8;
           const expected = "Данные не были введены";;

           const actual = ifelse.findSumMax(arg1, arg2, arg3);
           
           assert.strictEqual(actual, expected);

        });
        it('should return Данные не соответствуют условию задачи', () => {
            const arg1 = "yuuuuu";
            const arg2 = 99;
            const arg3 = 00 ;
            const expected = "Данные не соответствуют условию задачи";
 
            const actual = ifelse.findSumMax(arg1, arg2, arg3);
            
            assert.strictEqual(actual, expected);
 
         });
         it('should return 9', () => {
            const arg1 = 1;
            const arg2 = 2;
            const arg3 = 3;
            const expected = 9;
 
            const actual = ifelse.findSumMax(arg1, arg2, arg3);
            
            assert.strictEqual(actual, expected);
 
         });
         it('should return 65', () => {
            const arg1 = 4;
            const arg2 = 0;
            const arg3 = 58;
            const expected = 65;
 
            const actual = ifelse.findSumMax(arg1, arg2, arg3);
            
            assert.strictEqual(actual, expected);
 
         });
     
    });

});

