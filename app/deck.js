const R = require('ramda');

module.exports = {
  create: () => {
    const suits = ["Spades", "Clubs", "Hearts", "Diamonds"]
    const playingCards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]

    const join = card => card[0] + " of " + card[1];
    const joinCards = cards => R.map(join, cards);
    const createCards = R.pipe(R.xprod, joinCards);

    return createCards(playingCards, suits);
  },

  shuffle: (cards) => {
    const random = (a, b) => Math.random() >= 0.5;

    return R.sort(random, cards);
  },

  deal: (cards, handSize) => {
    const hand = R.take(handSize, cards);
    const notInDeck = card => !R.includes(card, hand);
    const dealedCards = R.filter(notInDeck, cards);

    return [dealedCards, hand];
  }
};
