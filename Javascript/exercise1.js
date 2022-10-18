//find maximum values of two numbers

function max(number1, number2){
    if (number1 > number2) return number1;
    else return number1;
}

function max(a, b){
    return (a > b) ? a : b;

}
let test = max(2, 1)
console.log(test);


//count of truthy values
const array = [null, undefined, 0,  1, 2,3]

console.log(countTruthy(array));

function countTruthy(array)
{
    let count = 0;
    for (let value of array)
        if (value){
            count++;
        } 
    return count;
}



///show properties of oobjects
function showProperties(obj){
    for (key in obj)
    {
        if (typeof(obj[key]) === 'string' ) console.log(key, obj[key]);   
    }
}

const movie ={
    title :'a',
    director : 'b',
    year : 2014,
    rating: 4.5
}

console.log(showProperties(movie));


//sum of multiple of 3, 5 that are less than the limit - 10

function sum(limit)
{
    let sum = 0;

    for (let i = 0; i <= limit; i++)
    {
        if ( i % 3 ===0 || i % 5 === 0)
        sum += i
    }
    return sum;
}

console.log(sum(10));

//calculate grade of a student

function calculate_marks(marks)
{   
    let sum = 0;
    for (let mark of marks)
    {
        sum += mark;
    }
    let average = sum / marks.length;

    if (average < 60) console.log('F');
    if (average < 70) console.log('D');
    if (average < 80) console.log('C');
    if (average < 90) console.log('B');
    if (average < 100) console.log('A');
}

let marks = [80,88,90];

console.log(calculate_marks(marks))

////Data Structures

// *
// * *
// * * *
// * *  *
// * *  * *

function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 1; i <= row; i++)
            pattern += '*';
        console.log(pattern);
    }

}
console.log(showStars(5));


//find  prime numbers less than 20 (limit)

function primeNumbers(limit){
    for (let number = 2; number < limit; number++){
        
        isPrime = true;
        for (let factor = 2; factor < number;factor++){  
            if (number % factor === 0)
            {
                isPrime= false;
                break;
            }
        }
        if(isPrime) console.log(number);
    }
}

console.log(primeNumbers(20));

