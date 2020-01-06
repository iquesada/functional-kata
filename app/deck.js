const R = require('rambda');

class Deck {
  constructor() {
    let suits = ["Spades", "Clubs", "Hearts", "Diamonds"]
    let playingCards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
    this.cards = []
    for(let i = 0; i < suits.length; i++)
      for(let j = 0; j < playingCards.length; j++)
        this.cards.push(playingCards[j] + " of " + suits[i])
  }

  getCards() {
    return this.cards;
  }

  shuffle() {
    const random = (a, b) => Math.random() >= 0.5;

    this.cards = R.sort(random, this.cards);
  }

  deal(handSize) {
    const hand = R.take(handSize, this.cards);
    const notInDeck = card => !R.includes(card, hand);
    this.cards = R.filter(notInDeck, this.cards);

    return hand;
  }
}

module.exports = Deck;
