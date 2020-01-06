const expect = require('chai').expect;
const Deck = require('../app/deck');


describe('Deck', () => {
  describe('#constructor', () => {
    it('should create a 52 deck', () => {
      let deck = new Deck();

      expect(deck.getCards().length).equal(52);
    })
  });

  describe('#shuffle', () => {
    it('should reorder the cards', () => {
      let deck = new Deck();
      const initialCards = [...deck.getCards()];

      deck.shuffle();

      expect(initialCards).not.eql(deck.getCards());
    })
  });

  describe('#deal', () => {
    it('should remove cards from the deck', () => {
      let deck = new Deck();
      
      const handSize = 5;
      const hand = deck.deal(handSize);

      expect(hand.length).equal(handSize);
      expect(52 - handSize).equal(deck.getCards().length);
    })
  });
});
