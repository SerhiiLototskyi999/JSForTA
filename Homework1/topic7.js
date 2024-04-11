//Task1
// Створення нового вікна
let newWindow = window.open('', '', 'width=300,height=300');

// Затримка у 2 секунди для зміни розміру вікна
setTimeout(function() {
    newWindow.resizeTo(500, 500);
}, 2000);

// Затримка у 4 секунди для переміщення вікна
setTimeout(function() {
    newWindow.moveTo(200, 200);
}, 4000);

// Затримка у 6 секунди для закриття вікна
setTimeout(function() {
    newWindow.close();
}, 6000);

//Task2
function changeCSS() {
   
    let textElement = document.getElementById('text');
 
    // Зміна стилю елемента
    textElement.style.color = 'orange';
    textElement.style.fontSize = '20px';
    textElement.style.fontFamily = 'Comic Sans MS';
}


//Task3
document.getElementById('button1').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('button2').ondblclick = function() {
    document.body.style.backgroundColor = 'pink';
};

document.getElementById('button3').addEventListener('mousedown', function() {
    document.body.style.backgroundColor = 'brown';
});
document.getElementById('button3').addEventListener('mouseup', function() {
    document.body.style.backgroundColor = 'white';
});

document.getElementById('link').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'yellow';
});
document.getElementById('link').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = 'white';
});


//Task4
function removeSelectedOption() {
    let list = document.getElementById("mySelect");
    list.remove(list.selectedIndex);
}

//Task5
let button = document.getElementById("myButton");
let statusMessage = document.createElement("div");
statusMessage.style.fontSize = "16px";
document.body.appendChild(statusMessage);
 
button.addEventListener("mouseenter", function() {
    eventLog.innerHTML += "Mouse on me!<br>";
});
 
button.addEventListener("mouseleave", function() {
    eventLog.innerHTML += "Mouse is not on me!<br>";
});
 
button.addEventListener("click", function() {
    eventLog.innerHTML += "I was pressed!<br>";
});


//Task6
function displayWindowSize() {
    // Отримуємо розміри вікна
    let width = window.innerWidth;
    let height = window.innerHeight;
   
    document.getElementById("dimensions").innerText = "Width: " + width + ", Height: " + height;
  }
 
  window.onload = displayWindowSize;
  window.onresize = displayWindowSize;

//Task7
const citiesUkraine = ['Kyiv', 'Ivano-Frankivsk', 'Odesa', 'Lviv'];
const citiesUsa = ['Dallas', 'LosAngeles', 'Miami', 'Chicago'];
const citiesAustralia = ['Melbourne', 'Sydney', 'Brisbane', 'Perth'];

const countryDropdown = document.getElementById('country');
const citiesDropdown = document.getElementById('cities');
const selectedCountry = document.getElementById('selected-country');
const selectedCity = document.getElementById('selected-city');

// Function to populate cities dropdown based on selected country
function populateCitiesDropdown(selectedCountryValue) {
    let cities;

    switch(selectedCountryValue) {
        case 'Ukraine':
            cities = citiesUkraine;
            break;
        case 'USA':
            cities = citiesUsa;
            break;
        case 'Australia':
            cities = citiesAustralia;
            break;
        default:
            cities = [];
    }

    // Clear previous options
    citiesDropdown.innerHTML = '';

    // Populate cities dropdown
    cities.forEach(function(city) {
        const option = document.createElement('option');
        option.text = city;
        citiesDropdown.add(option);
    });

    // Update selected country display
    selectedCountry.textContent = selectedCountryValue;

    // Select the top city in the dropdown
    citiesDropdown.selectedIndex = 0;

    // Update selected city display
    const selectedCityValue = citiesDropdown.value;
    selectedCity.textContent = selectedCityValue;
}

// Event listener for country dropdown
countryDropdown.addEventListener('change', function() {
    const selectedCountryValue = countryDropdown.value;

    // Populate cities dropdown based on selected country
    populateCitiesDropdown(selectedCountryValue);
});

// Event listener for cities dropdown
citiesDropdown.addEventListener('change', function() {
    const selectedCityValue = citiesDropdown.value;
    selectedCity.textContent = selectedCityValue;
});

// Set Ukraine as default country and Kyiv as default city
countryDropdown.value = 'Ukraine';
populateCitiesDropdown('Ukraine');