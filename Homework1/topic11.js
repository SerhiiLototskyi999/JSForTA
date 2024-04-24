//Task1
function castVote() {
    const button = document.getElementById('voteButton');
   
    // Змінюємо текст кнопки на "Processing..."
    button.textContent = 'Processing...';
 
    // Виконуємо асинхронний GET-запит
    fetch('/vote', {
        method: 'GET'
    })
    .then(response => response.text())
    .then(data => {
        // Оновлюємо текст кнопки з отриманого відповіді
        button.textContent = `Your vote is accepted: ${data}`;
    })
    .catch(error => {
        console.error('Error:', error);
        // Відновлюємо текст кнопки у випадку помилки
        button.textContent = 'Button';
    });
}

//Task2
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');
    const authorsList = document.getElementById('authorsList');

    downloadButton.addEventListener('click', async () => {
        try {
            const response = await fetch('/authors'); // Corrected endpoint
            const data = await response.json();

            // Clear the authors list
            authorsList.innerHTML = '';

            // Add authors to the list
            data.authors.forEach(author => {
                const li = document.createElement('li');
                li.textContent = author;
                authorsList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again.');
        }
    });
});





