//Task2
alert("My last name: Lototskyi")

//Task3
let age;
let size;

age  = 10;
size = "L";

console.log("The value of the first variable:", age);
console.log("The value of the second variable:", size);

age = size;
console.log("The new value of the first variable (after copying):", age, "\nThe value of the second variable (no change):", size);

//Task4
let phoneNumber;
const myObject = {
    name: "Jackie",
    age: 12,
    man: true,
    phone: phoneNumber,
    info: null
};
console.log(myObject);

//Task5
let isAdult = confirm("Are you of legal age?");
console.log("The user has reached the age of majority:", isAdult);

//Task6
let firstName;
let lastName;
let group;
let birthYear;
firstName = "Vinnie";
lastName = "Jones";
group = "MU";
birthYear = 1965;

let isMarried = false;

console.log(`
The variable type birthYear: ${typeof birthYear}, The value birthYear: ${birthYear}
The variable type isMarried: ${typeof isMarried}, The value isMarried: ${isMarried}
The variable type firstName: ${typeof firstName}, The value firstName: ${firstName}
The variable type lastName: ${typeof lastName}, The value lastName: ${lastName}
The variable type group: ${typeof group}, The value group: ${group}
`);

let nullVariable = null;
let undefinedVariable;

console.log("The variable type nullVariable:", typeof nullVariable);
console.log("The variable type undefinedVariable:", typeof undefinedVariable);

//Task7
let login = prompt("What is your login?", "login");
let email = prompt("What is your email?", "email");
let password = prompt("What is your password?", "password");

console.log(`Dear ${login}, your email is ${email}, your password is ${password}`);

//Task8
let secondsInHour = 60*60;
let secondsInDay = secondsInHour*24;
let secondsInMonth = secondsInDay*30;

alert(`Number of seconds in an hour: ${secondsInHour}, \nNumber of seconds in a day: ${secondsInDay}, \nNumber of seconds per month (30 days): ${secondsInMonth}`);