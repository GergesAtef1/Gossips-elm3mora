document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const instructionsPage = document.getElementById('instructions');
    const questionsPage = document.getElementById('questions');
    const endPage = document.getElementById('end');

    startButton.addEventListener('click', function() {
        instructionsPage.style.display = 'none';
        questionsPage.style.display = 'block';
    });

    const cardsContainer = document.querySelector('.cards-container');
    const cards = Array.from(document.querySelectorAll('.card'));
    let currentCardIndex = 0;

    function showCard(index) {
        cardsContainer.innerHTML = ''; // Clear current cards
        if (index < cards.length) {
            cardsContainer.appendChild(cards[index]);
            cards[index].style.opacity = '1'; // Ensure card is fully visible
        } else {
            questionsPage.style.display = 'none';
            endPage.style.display = 'block';
        }
    }

    function handleCardClick() {
        if (currentCardIndex < cards.length) {
            currentCardIndex++;
            showCard(currentCardIndex);
        }
    }

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });

    // Initialize with the first card
    showCard(currentCardIndex);
});
