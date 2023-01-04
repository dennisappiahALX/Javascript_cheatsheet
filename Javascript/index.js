//2. Arrays 
let selectedColors = ['red', 'yellow', 'blue'];
selectedColors[2] = 2;

console.log(selectedColors.length);

//3. Functions  - used to perform a certain task or calculation
//name - is a parameter
//kofi - is an argument

function greet(first_name, last_name ){
    console.log('Good morning' + ' '+ first_name + ' ' + last_name);
}

greet("kofi", "Appiah");

//4. Types of functions

function square(number){
    return number * number;
}

squareValue = square(3);
console.log(squareValue);

//operators

let x = 10;
let y = 5;

console.log(++x); //just increment by 1

console.log(y++);  //maintains 5 and increments by 1 on second console)
console.log(y)


//strict equality (type+value is true)

console.log(1 === 1); //true
console.log( '1' === 1); //false


//lose equality  - only checks the value - not recommended
console.log(1 == 1); //true
console.log( '1' == 1); //true


//control flow in JS
let role = 'guest';

switch(role){
    case 'guest':
        console.log("guest user");
        break;

    case 'manager':
        console.log("manager");
        break;

    default:
        console.log("No role user")
}

//In JS, for-loop, while loop, Do While loop is used to repeat a statement

for (let i = 0; i < 5; i++)
{
    console.log("hello", i)
}

// for (let i = 0; i < 5; i++)
// {
//     if (i % 2 !== 0) console.log(i)
// }

//while loop - ICU
let i = 0;

while (i <= 5)
{
    if (i % 2 !== 0) console.log(i);
    i++;
}

//do while loop - executed at least once

let j = 0;

do {
    if (j % 2 !== 0 ) console.log(i);
    j++;
} while (j <= 5);


//for-In loop is used to iterate over an object to display its properties

const person1 ={
    "name " : "Amina",
    "age" : 30
}

for (let key in person1){
    console.log(key, person1[key]);
}

//for-of loop is the best loop to iterate through an array

colors = ['red', 'yellow', 'green', 'black']

for (let color of colors) console.log(color);



//Ternary Operators

//if customer points is greater than  100
//then the customer id gold otherwise silver

let points = 110;

let type = points > 100 ? 'Gold' : 'Silver';

console.log(type);

//FOrmatted strings
const message = 
`Hi John

Thank you for joining my mailing list

Regards,
Dennis
`
console.log(message);

// Date 

const now = new Date();

now.getFullYear('2017');

now.toDateString();

//use find method to find elements in an array with references or objects

let course = courses.find(function(course){
    return course.title === 'math';
});

console.log(course);

//using arrow functions in ES6 - use arrow functions whenever you want to pass a functiona as an argument

let found = courses.find(course => course.lecturer === 'kofi');

console.log(found);


//Appending elements

const numbers = [1, 2, 3, 4]

//End
numbers.push()

//Beginning
numbers.unshift()

//Middle
numbers.splice()

//Empting an array
//method 1

let numberss = [2,3,4,6,7]
let another = numberss

numberss = []

//method 2
numbers.length = 0;

//method 3
while (numbers.length > 0)
    numbers.pop();

 
const first = [2,3,4,5,6];
const second = [7,7,8,9];

const combined = first.concat(second);
console.log(combined)


//iterating an array with a For Each loop instead of the For of loop

combined.forEach(number => console.log(number));

combined.forEach((number, index) => console.log(index, number));


//The join method converts an array into string

const prime_numbers = [1,3,5,7];
const joined = prime_numbers.join(',');

console.log(joined)

//The split method converts a string into an array

let text = 'This is my very first time coding in VS code';
let text_array = text.split(' ');

console.log(text_array);

//Sorting elements in an array
let list = [1,2,3,4,5]
list.sort()



//Sorting objects in an array
let student_courses = [
    {id:1, name: 'Kofi', course: 'Node.Js'},
    {id:2, name: 'Kojo', course: 'javaScript'}
];

student_courses.sort(function(a,b){
    //a < b => -1
    //a > b => 1
    //a = b => 0
    const courseA = a.course.toLowerCase();
    const courseB = b.course.toLowerCase();

    if (courseA < courseB) return -1;
    if(courseA > courseB ) return 1;
    return 0;
});

console.log(student_courses);

//Filtering An Array

const ages = [1, -1,2,3,5,7]

const filtered_age = ages.filter(function(value){
    return value >= 0;
})

const filtered_ages = ages.filter(value => value >= 0);

console.log(filtered_ages)

//Mapping An Array - Mapping each elements in an array to different element

let items = filtered_ages.map(item => '<li>' + item + '</li>');

console.log(items)

let items_object = filtered_ages.map(value => ({list : value}));
console.log(items_object)


//filtering and mapping together
filter_map = ages.filter(item => item >= 3).map(value => ({list : value}));

console.log(filter_map);

//Reduce method -  (provides a simpler way of lets say find sum)  /...args parameter in functions
// to take many arguments

function sum(discount, ...prices){
    let total=  prices.reduce((a,b) => a+b);
    return total * (1- discount);
}

console.log(sum(0.3, 40, 50,60, 70))

//Getters & Setters

//getters => access properties
//Setters => change(mutate) them

const studentDetail = {
    firstName: 'Dennis',
    lastName: 'Appiah',
    get fullname() {
        return `${studentDetail.firstName}  ${studentDetail.lastName}`
    },
    set fullname(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

studentDetail.fullname = 'Kofi Owusu';  //we cant directly change the content of the method.(setters)

console.log(studentDetail.fullname);    //we don't want to call the function as a method but as property (Getters)


console.log(studentDetail);


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
