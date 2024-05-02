//Task1
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}
 
let userInput = prompt("Введіть рядок:");
 
upperCase(userInput);
 
//Task2
function checkMail(mail) {
    let mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = mailPattern.test(mail);
    if (!isValid) {
        console.log("Mail is not correct!");
        return false;
    } else {
        console.log("Mail is correct!");
    }
    return isValid;
}

let userMail = prompt("Введіть електронну адресу:");
console.log("Mil validity:", checkMail(userMail));
 
//Task3
function findMatches(text) {
    let regex = /([dD]b+b+d)/gi;
    let matches = text.match(regex);
    return matches;
}

let userText = prompt("Введіть текст:");
let result = findMatches(userText);
console.log(result);
 
//Task4
let inputString = "Java Script";
let regex = /(.+)\s(.+)/;
let replacedString = inputString.replace(regex, "$2, $1");
console.log(replacedString); // "Script, Java"

 
//Task5
function validateCreditCardNumber(cardNumber) {

    let regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

    let formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1-').slice(0, -1);
    console.log(formattedCardNumber);

    return regex.test(formattedCardNumber);
}

let userCard = prompt("Введіть номер банківської карти:");

let isValidCard = validateCreditCardNumber(userCard);
console.log(isValidCard);

//Task6
function checkEmail(email) {
    let emailPattern = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
   
    if (emailPattern.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!");
    }
}
 
let userEmail = prompt("Введіть електронну адресу:");
 
checkEmail(userEmail);
 
//Task7
function checkLogin1(login) {
    let regex = /(?:\d*\.)?\d+/g;

    let numbers = login.match(regex);

    let isValidLogin = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/.test(login);

    console.log(isValidLogin ? "true" : "false");

    if (numbers !== null) {
        console.log(numbers.join(", "));
    }
}

let user1Login = prompt("Введіть логін:");
 
checkLogin1(user1Login);
