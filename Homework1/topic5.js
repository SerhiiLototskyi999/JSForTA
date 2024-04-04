//Task1
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    year: 2,
    addInfo: null
};

console.log(propsCount(mentor));

//Task2
let person = {
    name: "John",
    age: 30,
    city: "New York",
    profession: "Engineer",
    hobbies: ["reading", "hiking", "photography"]
};

function showProps(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    console.log("Properties of the object:", keys);
    console.log("Values of the properties:", values);
}

showProps(person);

//Task3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
 
    showFullName() {
        return `${this.surname} ${this.name}`;
    }
}
 
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
 
    showFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }
 
    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        if (this.year > currentYear) {
            return "You need to finish school before enrolling to the university.";
        } else {
            const course = currentYear - this.year + 1;
            if (course > 6) {
                return "You have already finished your studies.";
            } else {
                return `Current course: ${Math.min(Math.max(course, 1), 6)}`;
            }
        }
    }
}
 
function getUserInput() {
    const name = prompt('Enter your name: ');
    const surname = prompt('Enter your surname: ');
    const year = parseInt(prompt('Enter the year of enrollment: '));
 
    return { name, surname, year };
}
 
function main() {
    const { name, surname, year } = getUserInput();
    const stud1 = new Student(name, surname, year);
    console.log(stud1.showFullName("Olegovuch")); 
    console.log("Current course: " + stud1.showCourse()); 
}
 
main();

//Task4
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this._fullName = fullName;
        this._dayRate = dayRate;
        this._workingDays = workingDays;
        this._experience = 1.4;
    }

    showSalary() {
        return this._dayRate * this._workingDays;
    }

    showSalaryWithExperience() {
        return this._dayRate * this._workingDays * this._experience;
    }

    get showExp() {
        return this._experience;
    }

    set setExp(experience) {
        this._experience = experience;
    }

    get fullName() {
        return this._fullName;
    }
}

let workers = [
    new Worker("John Johnson", 20, 23),
    new Worker("Tom Tomson", 48, 22),
    new Worker("Andy Ander", 29, 23)
];

// Example usage
console.log(workers[0].fullName);                 
workers[0].showSalary();
console.log("New experience: " + workers[0].showExp);
workers[0].showSalaryWithExperience();
workers[0].setExp = 1.5;
console.log("New experience: " + workers[0].showExp);
workers[0].showSalaryWithExperience();


console.log("\nSorted salary:");
workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
workers.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));

//Task5
class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

function handleFigures(figures) {
    const totalArea = figures.reduce((acc, figure) => {
        console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
        return acc + figure.getArea();
    }, 0);

    console.log(totalArea);
}

const figures = [new Triangle(2, 6), new Square(4), new Circle(7)];
handleFigures(figures);

