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
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(handSize) {
    return this.cards.splice(0, handSize);
  }
}

module.exports = Deck;
