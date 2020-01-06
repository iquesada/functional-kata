const R = require('ramda');

class Deck {
  constructor() {
    const suits = ["Spades", "Clubs", "Hearts", "Diamonds"]
    const playingCards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]

    const join = card => card[0] + " of " + card[1];
    const joinCards = cards => R.map(join, cards);
    const createCards = R.pipe(R.xprod, joinCards);

    this.cards = createCards(playingCards, suits);
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
