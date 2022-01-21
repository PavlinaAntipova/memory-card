import MemoryGame from "./js/memory-game.js";

const game = new MemoryGame({element: ".js-card-list", scoreBox: ".js-score"});

game.container.addEventListener("click", onCardClick);


function onCardClick(e) {
    const card = e.target;
    const cardSides = [...card.children];

    game.openCard(cardSides);

    if (game.choiceCards(card).length === 2) {
        game.switchActivity();
        if (game.matchingCards()) {
            game.addScore();
            game.showScore();
            game.clearArray();
        } 

        if (!game.matchingCards()) {

            setTimeout(() => {
                game.closeCard();
                     game.clearArray();
                game.switchActivity();
            }, 1000);
        }
   }
}

