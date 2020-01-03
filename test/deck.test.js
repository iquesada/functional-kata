const expect = require('chai').expect;
const Deck = require('../app/deck');


describe('Deck', () => {
  describe('#constructor', () => {
    it('should create the deck', () => {
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
  })
});
