/*//1) Если а – четное посчитать а*б, иначе а+б
let a;
let b;

    function findResult(a, b){
        let answer;
            if ((!a && a !== 0 ) || (!b && b !== 0 )){
                answer = "Данные не были введены";

                return answer;
            }

            if(typeof a !== "number" && typeof b !== "number"){
                answer = "Данные не соответствуют условию задачи";

                return answer;
            } 

        let result;
            if (a % 2 === 0){
                result = a * b;

                return result;
            } else {
                result = a + b;

                return result;
            }
    
    };

console.log(findResult(a, b));*/
 
/*
//3) Найти суммы только положительных из трех чисел
let first_number;
let second_number;
let third_number;


function findSum(first_number, second_number, third_number){
    let answer;
        if ((!first_number && first_number !== 0 ) || (!second_number && second_number !== 0 ) || (!third_number && third_number !== 0)){

            answer = "Данные не  были введены";

            return answer;
        } 
        if(typeof first_number !== "number" || typeof second_number !== "number" || typeof third_number !== "number"){
        
            answer = "Данные не соответствуют условию задачи";

            return answer;
         } 

        if(first_number <= 0 && second_number <= 0 && third_number <= 0){

            answer = "Положительные числа не были введены";

            return answer;
         }

    let sum = 0;
        if (first_number > 0){

            sum = sum + first_number;

        } if (second_number > 0){

            sum = sum + second_number;

        } if (third_number > 0){

            sum = sum + third_number;

        }

    return sum;
};

console.log(findSum(first_number, second_number, third_number));

//2) Определить какой четверти принадлежит точка с координатами (х,у)

/*
let x;
let y;

function findPlace(x, y){
    let answer;
        if ((!x && x!== 0 ) || (!y && y !== 0 )){

            answer = "Данные не были введены";
            return answer;

        } 
        if(typeof x !== "number" || typeof y !== "number"){
        
            answer = "Данные не соответствуют условию задачи";
            return answer;

        } 

    let quarter;
        if (x > 0 && y > 0){

            quarter = 1;

        } else if (x < 0 && y > 0){

            quarter = 2;

        } else if (x === 0 && y === 0){

            quarter = "Точка расположена в начале координат";

        } else if (y < 0 && x > 0 ){

            quarter = 4;

        } else if (y < 0 && x < 0 ){

            quarter = 3;

        } else if (y > 0 && x === 0){

            quarter = "Точка расположена на оси y между 1 и 2 координатными плоскостями";

        } else if (y < 0 && x === 0){

            quarter = "Точка расположена на оси y между 3 и 4 координатными плоскостями";

        } else if (y === 0 && x > 0){

            quarter = "Точка расположена на оси х между 1 и 4 координатными плоскостями";

        } else if (y === 0 && x < 0){

            quarter = "Точка расположена на оси х между 2 и 3 координатными плоскостями";
        }
    
    return quarter; 
};

console.log(findPlace(x, y));*/

/*//5) Написать программу определения оценки студента по его рейтингу, на основе следующих правил

let rating;
function checkEvaluation(rating){
    let answer;
    if ((!rating && rating !== 0)){
        answer = "Данные не были введены";

        return answer;
    } 
    if(typeof rating !== "number"){
        answer = "Данные не соответствуют условию задачи";

        return answer;
    } 

    if (rating >= 0 && rating <= 19)
    {
        return "F";

    }else if (rating >= 20 && rating <= 39)
    {
        return "E";
    }
    else if (rating >= 40 && rating <= 59)
    {
        return "D";
    }
    else if (rating >= 60 && rating <= 74)
    {
        return "C";
    }
    else if(rating >= 75 && rating <= 89)
    {
        return "B";

    } else if(rating >= 90 && rating <= 100)
    {
        return "A";
    }
    else
    {
        return "Оценка соответствующая указанному рейтингу отсутствует в базе данных";
    }
}
console.log(checkEvaluation(rating));*/

/*
//4) Посчитать выражение макс(а*б*с, а+б+с)+3

let a;
let b;
let c;
function findSum(a, b, c){
    let answer;
    if ((!a && a !== 0 ) || (!b && b !== 0 ) || (!c && c !== 0)){
        answer = "Данные не были введены";

        return answer;
    } 
    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){ 
        answer = "Данные не соответствуют условию задачи";

        return answer;
    } 

    if((a * b * c) > (a + b + c)){

        return a * b * c + 3;

    }else if((a *b * c) < (a + b + c)){

        return a + b + c + 3;

    }else{
        let sum = a + b + c + 3;

        return `Значения произведения данных чисел и их сложения равны поэтому прибавление к любому из них цифры 3 даст результат равный ${sum}`;
    }
};
console.log(findSum(a, b, c));*/