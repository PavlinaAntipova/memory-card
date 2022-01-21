export default class MemoryGame {
    constructor(options) {
        this.container = document.querySelector(options.element);
        this.scoreText = document.querySelector(options.scoreBox);
        this.flippedCards = [];
        this.score = 0;
    }
    
    openCard(cardSides) {
    cardSides.forEach(side => {
    side.classList.add("flipped");
    });
        
    }

    closeCard() {
        this.flippedCards.forEach(card => {
            const sides = [...card.children];
            sides.forEach(side => {
                side.classList.remove("flipped");
            })
        });      
    }

    choiceCards(card) {
        this.flippedCards.push(card);
        return this.flippedCards;
    }

    matchingCards() {
        const [firstCard, secondCard] = this.flippedCards;
            
        if (this.flippedCards.length === 2) {
            return firstCard.dataset.icon === secondCard.dataset.icon;
        }
    }
    
    switchActivity() {
        this.container.classList.toggle("is-inactive");
    }

    clearArray() {
        this.flippedCards = [];
    }

    addScore() {
        this.score += 1;
    }

    showScore() {
    
        this.scoreText.textContent = this.score;
    }
}

