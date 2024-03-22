//Task 1
let x = 1;
let y = 2;

let res1 = `${x}${y}`;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = `${Boolean(x)}${y}`;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x < y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x / 'a';
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Task2
// Convert the input to a number
let number = parseFloat(prompt("Please enter a number:"));

// Check if the input is not a number
if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Check if the number is zero
    if (number === 0) {
        console.log("The number is zero.");
    } else {
        // Check if the number is even and positive
        if (number % 2 === 0 && number > 0) {
            console.log("The number is even and positive.");
        } else {
            console.log("The number is not even and positive.");
        }
    }
    // Check if the number is divisible by 7
    if (number % 7 === 0) {
        console.log("The number is divisible by 7.");
    } else {
        console.log("The number is not divisible by 7.");
    }
}

//Task3
let myArray = [];
myArray.push(10);
myArray.push("Hello");
myArray.push(true);
myArray.push(null);

let userInput = prompt("Please, enter any value:");
myArray.push(userInput);

console.log("Fifth element of the array:", myArray[4]);
myArray.shift();
console.log("Array after removing the first element:", myArray);

//Task4
let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.join("*");
console.log(result);

//Task5
let userAge = prompt("Скільки вам років?");

if (isNaN(userAge)) {
    console.log("Введіть коректне число.");
} else {
    userAge = parseInt(userAge);
    let isAdult = userAge >= 18;

    if (isAdult) {
        console.log("Ви досягли повнолітнього віку.");
    } else {
        console.log("Ви ще надто молоді.");
    }
}

//Task6
let side1 = prompt("Введіть довжину першої сторони трикутника:");
let side2 = prompt("Введіть довжину другої сторони трикутника:");
let side3 = prompt("Введіть довжину третьої сторони трикутника:");

// Перевірка чи введені значення коректні
if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    console.log('Incorrect data');
} else {
    // Перетворення введених значень на числа
    side1 = parseFloat(side1);
    side2 = parseFloat(side2);
    side3 = parseFloat(side3);

    // Перевірка чи це трикутник (за правилом нерівності трикутника)
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        // Обчислення півпериметра
        let s = (side1 + side2 + side3) / 2;
        // Обчислення площі за формулою Герона
        let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

        // Виведення площі трикутника з точністю до 3 знаків після коми
        console.log("Площа трикутника:", area.toFixed(3));

        // Перевірка чи трикутник є прямокутним
        let isRightTriangle = false;
        if (side1 ** 2 + side2 ** 2 === side3 ** 2 ||
            side1 ** 2 + side3 ** 2 === side2 ** 2 ||
            side2 ** 2 + side3 ** 2 === side1 ** 2) {
            isRightTriangle = true;
        }

        // Виведення результату перевірки чи трикутник є прямокутним
        if (isRightTriangle) {
            console.log("Цей трикутник є прямокутним.");
        } else {
            console.log("Цей трикутник не є прямокутним.");
        }
    } else {
        console.log('Невірні дані');
    }
}

// Task7
// if-else
let currentDate = new Date();
let currentHour = currentDate.getHours();

if (currentHour >= 23 || currentHour < 5) {
    console.log("Доброї ночі!");
} else if (currentHour >= 5 && currentHour < 11) {
    console.log("Доброго ранку!");
} else if (currentHour >= 11 && currentHour < 17) {
    console.log("Доброго дня!");
} else {
    console.log("Доброго вечора!");
}

//switch-case
let currentDate1 = new Date();
let currentHour1 = currentDate1.getHours();
let greeting1;

switch (true) {
    case (currentHour1 >= 23 || currentHour1 < 5):
        greeting1 = "Доброї ночі!";
        break;
    case (currentHour1 >= 5 && currentHour1 < 11):
        greeting = "Доброго ранку!";
        break;
    case (currentHour1 >= 11 && currentHour1 < 17):
        greeting1 = "Доброго дня!";
        break;
    default:
        greeting1 = "Доброго вечора!";
}

console.log(greeting1);
