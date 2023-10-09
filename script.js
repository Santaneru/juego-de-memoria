let cards = [];
let flippedCards = [];
let pairsFound = 0;

function startGame() {
    const gameBoard = document.getElementById('gameBoard');
    const difficulty = parseInt(document.getElementById('difficulty').value);
    
    cards = [];
    flippedCards = [];
    pairsFound = 0;
    gameBoard.innerHTML = '';

    for (let i = 0; i < difficulty / 2; i++) {
        cards.push(i);
        cards.push(i);
    }

    // Mezclar las tarjetas
    cards.sort(() => 0.5 - Math.random());

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.value = card;
        cardElement.onclick = flipCard;
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(event) {
    if (flippedCards.length < 2) {
        const cardElement = event.currentTarget;
        cardElement.style.backgroundColor = 'white';
        cardElement.innerHTML = cardElement.dataset.value;
        flippedCards.push(cardElement);

        if (flippedCards.length === 2) {
            if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
                pairsFound++;
                flippedCards = [];

                if (pairsFound === cards.length / 2) {
                    setTimeout(() => alert('¡Ganaste!'), 500);
                }
            } else {
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.style.backgroundColor = 'gray';
                        card.innerHTML = '';
                    });
                    flippedCards = [];
                }, 1000);
            }
        }
    }
}

startGame();
