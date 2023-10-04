class Card {
    constructor(suit, rank, score){
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}



class Deck {
    constructor() {
        this.card = [];
        this.createDeck();
    }
    createDeck() {
        const suits = ["hearts", "diamonds", "spades", "clubs"];
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "queen", "king", "Ace"];

        for (let i = 0; i < suits.length; i++){
          
        }  
    }
}


const max = new Deck();
console.log(max)
