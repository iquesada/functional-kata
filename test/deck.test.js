const expect = require('chai').expect;
const Deck = require('../app/deck');


describe('Deck', () => {
  describe('#constructor', () => {
    it('should create a 52 deck', () => {
      const deck = Deck.create();

      expect(deck.length).equal(52);
    })
  });

  describe('#shuffle', () => {
    it('should reorder the cards', () => {
      const deck = Deck.create();

      const shuffleDeck = Deck.shuffle(deck);

      expect(deck).not.eql(shuffleDeck);
    })
  });

  describe('#deal', () => {
    it('should remove cards from the deck', () => {
      const deck = Deck.create();

      const handSize = 5;
      const [dealed, hand] = Deck.deal(deck, handSize);

      expect(hand.length).equal(handSize);
      expect(52 - handSize).equal(dealed.length);
    })
  });
});
