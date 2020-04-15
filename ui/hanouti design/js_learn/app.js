//* Getting my dive id 
let dive = document.getElementById('dive');
let datas = "Hello from app.js";

//! Type
//* Numbers
//? Integer
//? Float
//? Special number 
let inf = Infinity;
let negInf = -Infinity;
//?- Not a Number
let nan = NaN;
// console.log(0 / 0);
// console.log(inf + negInf);

//* String
let name = 'Taftadjani';
// console.log(name);

let pseudo = "Tafta";
// console.log(pseudo);

//? Backtick-quoted string 
let completeName = `${name} Dahirou`;
// console.log(completeName);

//? Backslashing
let person = `${name}\n24 years old`;
// console.log(person);

//? String concatenation
let str1 = "My name is " + name;
str1 = `My name is ${name}`;
// console.log(str1);
//? String method
// datas = str1.toUpperCase();

//* Boolean
// console.log(3 > 2);
// console.log(3 < 2);
// console.log(nan == nan); // -> flase

//* Empty values type
//? null
// console.log(null == 0);
//? undefined
let x;
// console.log(x);
// console.log(null == undefined);

//* Type conversion - type coercion
// console.log(8 * null);
// console.log("5" - 1);
// console.log("5" + 1);
// console.log("five" * 2);
// console.log(false == 0);

//! Arithmetic
//* Binary operator
//? + Addition
//? - Substraction
//? * Multiplication
//? / Division
//? % Modulos
//? ++ 
//? --
//? +=
//? -=
//? *=
//? /=
//? %=
//? in

//* Unary operator
//? typeof
// console.log(typeof 90);
// console.log(typeof 9.0);
// console.log(typeof 9e90);
// console.log(typeof "90");

//* Comparison
// < > <= >= == != === !==
// console.log(3 == 3);
// console.log(3 !== '3');

//* Logical operator
// && || !
// console.log(null || "user");
// console.log('Tafta' || "user");

//* Ternary operator
// ? :
// console.log(true ? true : false);

//* Spread operator
const ages = [23, 90, 78, 28];
const allAges = [1, 2, 30, ...ages];
// datas = allAges;

//! Functions
//* prompt
// console.log(prompt('Salut'));
//* log
//* Number 
//? isNaN
// console.log(Number.isNaN(0 / 0));
// console.log(Number.isNaN('tafta'));

//* Math
//? Max
// console.log(Math.max(5, 8, 89));
//? Min
// console.log(Math.min(2, 4) + 100);
//? sqrt
//? cos
//? sin
//? tan
//? acos
//? asin
//? atan
//? pi
// datas = Math.PI
//? random
// datas = Math.random();
//? floor
// datas = Math.floor(7.9);
//? ceil
// datas = Math.ceil(7.9);
//? round
// datas = Math.round(7.4)
// datas = Math.round(7.5)
//? abs

//* Defining a function
const square = function(x) {
    return x * x;
}

function getName(name) {
    return name;
}

const arrow = () => 'Taftadjani';

const varPara = (...numb) => {
        let rest = '';
        for (const num of numb) {
            rest += num;
            rest += ",";
        }
        return rest;
    }
    // datas = varPara(8, 9, 9, 8, 09, 'Tafta');
    //* Invoking the function 
    // console.log(square(5));
    // console.log(getName('Taftadjani'));
    // console.log(arrow());

const f1 = function() {
        const f1inner = function() {
            console.log('f1inner');
        }
        console.log('f1');
        f1inner();
    }
    // f1();

const operation = op => {
    return (a, b) => op(a, b);
}
const plus = operation((a, b) => a + b);
const minu = operation((a, b) => a - b);
// datas = plus(2, 90);
// datas = minu(92, 90);

//* Closure

//* Recursion
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
// console.log(power(2, 3));


//! Conditional execution
//* if - if else - if else if
if (false) {
    console.log(true);
} else {
    // console.log(false);
}
//* while - do while
while (false) {
    console.log('Never enter here');
}
do {
    // console.log("Enter here just once");
} while (false);

//* For loop
for (let index = 0; index < 2; index++) {
    // console.log(index);
}

//* for of
let myArray = [7, 9, 8, 66];
let result2 = "";
for (const dat of myArray) {
    result2 += dat;
}
// datas = result2;

//* switch

//! Breaking out of a loop
//* break

//! Data sets 
//* array
let numbers = [3, 90, 7, 0, 3];
//? Array properties
// datas = numbers.length;
//? Array method
// datas = numbers.push(90);
// datas = numbers.pop();

// datas = numbers.unshift(89);
// datas = numbers.shift();
// datas = numbers;

// datas = numbers.indexOf(3);
// datas = 'Taftadjani'.indexOf('jan');
// datas = numbers.lastIndexOf(3);
// datas = numbers;

// datas = numbers.slice(0);
// datas = numbers.slice(0, 2);
// datas = numbers;

// datas = "Tafta djani\nDahirou .".trim();
// datas = "Tafta djani Dahirou".split(' ');
// datas = "Tafta".repeat(5);
// datas = numbers;


//* Objects
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
// datas = JSON.stringify(day1);
// datas = day1.squirrel;
// datas = day1.events;
// datas = day1['events'];
day1.squirrel = true;
day1.myName = 'Taftadjani Dahirou';
// datas = day1.squirrel;
// datas = day1.myName;

//? delete
// delete day1.myName;

//? in 
// datas = 'squirrel' in day1
// datas = 'events' in day1
// datas = 'myName' in day1

//? objects methods
// datas = Object.keys(day1)
let day2 = {};
Object.assign(day2, day1);
// datas = Object.keys(day2.events);
day2.events.push(78);
// datas = Object.keys(day1.events);
const day3 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
day3.events = "Hi";
// datas = JSON.stringify(Object.keys(day3.events));
// datas = day3.events[0]

let tab2 = [1, 8, 6, 10, [9, 8, 7], 7];
// datas = tab2.reduce((a, b) => a - b);

// datas = tab2.filter((a) => a > 5);

// Flattening
const flattening = () => {

}







































//! Execirces
//* Looping a triangle
let nb = 5;
let result = "";
for (let x = 1; x <= nb; x++) {
    for (let y = 1; y <= x; y++) {
        result += "# ";
    }
    result += "\n";
}
// console.log(result);

//* A fizzbuzz
/* for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if (index % 3 === 0) {
        console.log("FIZZ");
    } else if (index % 5 === 0) {
        console.log("BUZZ");
    } else {
        console.log(index);
    }
} */

//* Chessboard
const size = 80;
let chessboard = "";
for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        if ((x % 2 == 0 && y % 2 == 0) || (x % 2 != 0 && y % 2 != 0)) {
            chessboard += " ";
        } else {
            chessboard += '#';
        }
    }
    chessboard += '\n';
}
// console.log(chessboard);

//* Minimum
const minus = (a, b) => a > b ? b : a;
// console.log(minus(6, 0));

//* Recursion
function isEven(x) {
    if (x < 0) {
        return 'work just with poistive number';
    }
    if (x === 0) {
        return true;
    } else if (x === 1) {
        return false;
    } else {
        return isEven(x - 2);
    }
}
// str = "t";
// console.log(typeof str === 'string');

// console.log(isEven(-1));

const countBs = (str) => {
    if (typeof str === 'string') {
        let count = 0;
        for (let index = 0; index < str.length; index++) {
            if (str[index] === 'B') {
                count++;
            }
        }
        return count;
    }
    return -1;
}
const countChar = (str, char) => {
    if (typeof str === 'string') {
        let count = 0;
        for (let index = 0; index < str.length; index++) {
            if (str[index] === char) {
                count++;
            }
        }
        return count;
    }
    return -1;
}
console.log(countChar('BgggbB', 'g'));
// console.log(countBs('BgggbB'));

//* Sum of the range
const range = (start, stop, step = 1) => {
    let result = [];
    if (start < stop) {
        for (let index = start; index <= stop; index += step) {
            result.push(index);
        }
    }
    return result;
}
const sum = (array) => {
        if (array.length === 1) {
            return array[0];
        } else {
            const lastElt = array.pop();
            array[0] += lastElt;
            return sum(array);
        }
    }
    // datas = sum(range(1, 10))
    // datas = range(1, 10)

//* Reversing an array
const reverseArrayInPlace = arr => {
    if (arr.length > 1) {

        const first = arr.shift();
        const last = arr.pop();
        reverseArrayInPlace(arr);
        arr.push(first);
        arr.unshift(last);
    }
}

const reverseArray = arr => {
    let newArra = [];
    const leng = arr.length;
    for (let i = 0; i < leng; i++) {
        newArra.unshift(arr.shift());
        // newArra.push(arr.pop());
    }
    return newArra;
}

let tab = [1, 8, 6, 0, 7];
// reverseArrayInPlace(tab);
// datas = reverseArray(tab);

//* A list
const arrayToList = (arr) => {
        let list = null;
        for (let i = arr.length - 1; i >= 0; i--) {
            const listItem = { 'value': arr[i], 'rest': list };
            list = listItem;
        }
        return list;
    }
    // datas = JSON.stringify(arrayToList([0, 4, 2, 1]));
const listToArray = (list) => {
        let arr = [];
        do {
            if (list !== null) {
                arr.push(list.value);
                list = list.rest;
            }
        } while (list != null);
        return arr;
    }
    // datas = listToArray({
    //     'value': 3,
    //     'rest': {
    //         'value': 9,
    //         'rest': {
    //             'value': 12,
    //             'rest': null
    //         }
    //     }
    // });

//* Deep comparison
const deepEqual = (a, b) => {
    if (typeof a === 'object' && typeof b === 'object') {
        if (a === null || b === null) {
            return a === b;
        } else {
            if (a.keys !== b.keys) {
                return false;
            }
        }
    } else if ((typeof a === 'object' && typeof b !== 'object') || (typeof b === 'object' && typeof a !== 'object')) {
        return false;
    } else {
        return a === b;
    }
}

// datas = deepEqual({ 8: 0 }, { 8: 0 });
// const x = { 'r': 2, 'e': 9, 'z': 8 };
// datas = x.keys();



















//* Updating the div
dive.innerHTML = datas;