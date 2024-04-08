//Task1
//Використовуючи метод getElementById:
document.getElementById("test").innerText = "Last";

//Використовуючи метод querySelector:
document.querySelector("#test").innerText = "Last";

//Використовуючи бібліотеку jQuery:
$("#test").text("Last");

//Task2
let imgElement = document.querySelector('.image');

imgElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fLEJQbiweXf70PSJaM1D8TyQJNbCeJP5wQ&s';
alert(imgElement.outerHTML);

//Task3
let paragraphs = document.querySelectorAll('#text p');

paragraphs.forEach(function(paragraph, index) {
    console.log("Selector text " + index + ": " + paragraph.textContent);
});


//Task 4
//a
let listItems = document.querySelectorAll('#list li');

let order = [0, listItems.length - 1, 1, listItems.length - 2, 2];

let output = "";
order.forEach(function(index) {
    output += listItems[index].textContent + "\n";
});
alert(output);

//b
let listItems2 = document.querySelectorAll('#list li');

let output1 = "";
output1 += listItems2[0].textContent + "\n"; // Перший елемент
output1 += listItems2[listItems.length - 1].textContent + "\n"; // Останній елемент
output1 += listItems2[1].textContent + "\n"; // Другий елемент
output1 += listItems2[listItems.length - 2].textContent + "\n"; // Четвертий елемент
output1 += listItems2[2].textContent + "\n"; // Третій елемент

alert(output1);

//Task5
let header = document.querySelector('h1');
let graphs = document.querySelectorAll('#myDiv p');
let list = document.getElementById('myList');
let span = document.querySelector('span');

// Застосування стилів до заголовку
header.style.fontWeight = 'bold';
header.style.fontSize = '32px';
header.style.color = 'black';
header.style.backgroundColor = '#7cfc00';
header.style.display = 'inline-block';

// Застосування стилів до абзаців
graphs[0].style.fontWeight = 'bold';
graphs[0].style.fontStyle = 'normal';
graphs[0].style.color = 'black';

graphs[1].style.fontStyle = 'normal';
graphs[1].style.color = 'red';

graphs[2].style.textDecoration = 'underline';

graphs[3].style.fontStyle = 'italic';

// Застосування стилів до елементів списку
list.style.display = 'flex';
list.style.listStyleType = 'none'

// Застосування стилів до span елементу
span.style.display = 'none'; // Щоб зробити невидимим

//Task6
let message1 = prompt("Введіть перше повідомлення:");
let message2 = prompt("Введіть друге повідомлення:");

document.getElementById("input1").value = message1;
document.getElementById("input2").value = message2;

let temp = document.getElementById("input1").value;
document.getElementById("input1").value = document.getElementById("input2").value;
document.getElementById("input2").value = temp;

//Task7
// Створення основних елементів
let body = document.createElement("body");
let main = document.createElement("main");
let div = document.createElement("div");
let paragraph = document.createElement("p");

main.setAttribute("class", "mainClass check item");
div.setAttribute("id", "myDiv");

paragraph.textContent = "First paragraph";
div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);
document.documentElement.appendChild(body);
