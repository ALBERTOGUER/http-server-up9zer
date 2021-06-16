class Deck {
  numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  suits = ['♣', '♦', '♥', '♠'];

  cards = [];

  constructor() {
    this.suits.forEach(suit => {
      this.numbers.forEach(face => {
        this.cards.push(face + suit);
      });
    });
  }

  dispatchCards(size) {
    if (this.cards.length <5){
      this.cards = []
      this.suits.forEach(suit => {
      this.numbers.forEach(face => {
        this.cards.push(face + suit);
      });
    });
    }
    return new Array(size)
      .fill()
      .map(
        () =>
          this.cards.splice(parseInt(Math.random() * this.cards.length), 1)[0]
      );
  }

  numberCards(){
    return this.cards.length
  }
}

class Hand {
  cards = [];
  cardsDealing = 0
  constructor(deck, size) {
    this.cardsDealing = deck.numberCards()
    if(this.cardsDealing < 5){
      
    }
    this.cards = deck.dispatchCards(size);
  }

  clean(){
    this.cars = []
  }
}

module.exports = {
  Deck,
  Hand
};
