//Homework3
//Task1
let array = [2, 3, 4, 5];

let productFor = 1;
for (let i = 0; i < array.length; i++) {
    productFor *= array[i];
}
console.log("Добуток елементів масиву (за допомогою циклу for):", productFor);

let productWhile = 1;
let j = 0;
while (j < array.length) {
    productWhile *= array[j];
    j++;
}
console.log("Добуток елементів масиву (за допомогою циклу while):", productWhile);

//Task2
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

//Task3
function randArray(k) {
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Math.round(Math.random() * 500) + 1);
    }
    return result;
}

console.log(randArray(5));

//Task4
function raiseToDegree(a, b) {
    return Math.pow(a, b);
}

let a = parseInt(prompt("Введіть число a:"));
let b = parseInt(prompt("Введіть число b:"));

if (!isNaN(a) && !isNaN(b)) {
    console.log(`Результат піднесення числа ${a} до степеня ${b}:`, raiseToDegree(a, b));
} else {
    console.log("Введені значення не є цілими числами.");
}

//Task5
function findMin() {
    if (arguments.length === 0) {
        return undefined;
    }
    
    let min = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }

    return min;
}

console.log(findMin(-16, 14, 4, -4, 0.2));

//Task6
function findUnique(arr) {
    let frequencyCounter = {};

    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }

    for (let key in frequencyCounter) {
        if (frequencyCounter[key] !== 1) {
            return false;
        }
    }

    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));  // false
console.log(findUnique([1, 2, 3, 5, 11])); // true

//Task7
function lastElem(arr, count = 1) {
    if (count <= arr.length) {
        return arr.slice(-count);
    } else {
        return arr;
    }
}

console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8));   // [3, 4, 10, -5]

//Task8
function capitalizeFirstLetter(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

let inputString = 'i love java script';
let outputString = capitalizeFirstLetter(inputString);
console.log(outputString); // "I Love Java Script"
