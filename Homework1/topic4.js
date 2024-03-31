//Task1
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
        throw new Error("Width and height must be numbers.");
    }
    return width * height;
}
 
try {
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    let height = parseFloat(prompt("Enter the height of the rectangle:"));
    let area = calcRectangleArea(width, height);
    console.log("Rectangle area:", area);
} catch (error) {
    console.log("Error:", error.message);
}
 
//Task2
function checkAge() {
    try {
        let ageInput = +prompt("Please enter your age:");
       
        if (ageInput === "") {
            throw new Error("The field is empty! Please enter your age");
        }
        else if (isNaN(ageInput)) {
            throw new Error("Invalid input! Please enter a number for your age");
        }
       
        else if (ageInput < 14) {
            throw new Error("You are too young to watch this movie. Your age must be 14 or older.");
        }
        else{
            alert("You are allowed to watch the movie.");
        }
       
       
    } catch (error) {
        alert(`Error: ${error.name} \nDescription: ${error.message}`);
    }
}
 
checkAge();
 
//task3
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
}
 
function showMonthName(month) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
 
    if (!isNaN(month)) {
        month = parseInt(month);
        if (month < 1 || month > 12) {
            throw new MonthException('Incorrect month number');
        }
        return months[month - 1];
    } else if (typeof month === 'string') {
        month = month.charAt(0).toUpperCase() + month.slice(1);
        const index = months.indexOf(month);
        if (index === -1) {
            throw new MonthException('Invalid month name!');
        }
        return months[index];
    } else {
        throw new MonthException('Invalid input!');
    }
}
 
try {
    let userInput = prompt("Enter the month number or name:");
    console.log(showMonthName(userInput));
} catch (error) {
    console.log(error.name + ': ' + error.message);
}
 
//Task4
function showUser(id) {
    if (id < 0) {
        throw new Error('ID must not be negative: ' + id);
    }
    return { id };
}
 
function showUsers(ids) {
    const validUsers = [];
    ids.forEach(id => {
        try {
            validUsers.push(showUser(id));
        } catch (error) {
            console.log('Error:', error.message);
        }
    });
    return validUsers.map(user => user.id);
}
 
function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomId = Math.floor(Math.random() * (max - min + 1) + min);
        randomArray.push(randomId);
    }
    return randomArray;
}
 
const randomArray = generateRandomArray(5, -50, 100);
console.log('Random Array:', randomArray);
console.log('Valid Users IDs:', showUsers(randomArray));