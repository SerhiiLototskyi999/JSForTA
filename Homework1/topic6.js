//Task1
//Використовуючи метод getElementById:
document.getElementById("test").innerText = "Last";

//Використовуючи метод querySelector:
document.querySelector("#test").innerText = "Last";

//Використовуючи бібліотеку jQuery:
$("#test").text("Last");

//Task2
var imgElement = document.querySelector('.image');

imgElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fLEJQbiweXf70PSJaM1D8TyQJNbCeJP5wQ&s';
alert(imgElement.outerHTML);

//Task3
var paragraphs = document.querySelectorAll('#text p');

paragraphs.forEach(function(paragraph, index) {
    console.log("Selector text " + index + ": " + paragraph.textContent);
});


//Task 4
//a
var listItems = document.querySelectorAll('#list li');

var order = [0, listItems.length - 1, 1, listItems.length - 2, 2];

var output = "";
order.forEach(function(index) {
    output += listItems[index].textContent + "\n";
});
alert(output);

//b
var listItems = document.querySelectorAll('#list li');

var output = "";
output += listItems[0].textContent + "\n"; // Перший елемент
output += listItems[listItems.length - 1].textContent + "\n"; // Останній елемент
output += listItems[1].textContent + "\n"; // Другий елемент
output += listItems[listItems.length - 2].textContent + "\n"; // Четвертий елемент
output += listItems[2].textContent + "\n"; // Третій елемент

alert(output);

//Task5
var header = document.querySelector('h1');
var paragraphs = document.querySelectorAll('#myDiv p');
var listItems = document.querySelectorAll('#myList li');
var span = document.querySelector('span');

// Застосування стилів до заголовку
header.style.fontWeight = 'bold';
header.style.fontSize = '32px';
header.style.color = 'black';
header.style.backgroundColor = '#7cfc00';
header.style.display = 'inline-block';

// Застосування стилів до абзаців
paragraphs[0].style.fontWeight = 'bold';
paragraphs[0].style.fontStyle = 'normal';
paragraphs[0].style.color = 'black';

paragraphs[1].style.fontStyle = 'normal';
paragraphs[1].style.color = 'red';

paragraphs[2].style.textDecoration = 'underline';

paragraphs[3].style.fontStyle = 'italic';

// Застосування стилів до елементів списку
listItems.forEach(function(item) {
    item.style.display = 'inline-block';
});

// Застосування стилів до span елементу
span.style.display = 'none'; // Щоб зробити невидимим

//Task6
var message1 = prompt("Введіть перше повідомлення:");
var message2 = prompt("Введіть друге повідомлення:");

document.getElementById("input1").value = message1;
document.getElementById("input2").value = message2;

var temp = document.getElementById("input1").value;
document.getElementById("input1").value = document.getElementById("input2").value;
document.getElementById("input2").value = temp;

//Task7
// Створення основних елементів
var body = document.createElement("body");
var main = document.createElement("main");
var div = document.createElement("div");
var paragraph = document.createElement("p");

main.setAttribute("class", "mainClass check item");
div.setAttribute("id", "myDiv");

paragraph.textContent = "First paragraph";
div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);
document.documentElement.appendChild(body);
