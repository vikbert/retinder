export const ADD_CARD = 'card.ADD_CARD';
export const LOAD_CARDS = 'card.LOAD_CARD';

export const addCard = (card) => ({
    type: ADD_CARD,
    card,
});
export const loadCards = (cards) => ({
    type: LOAD_CARDS,
    cards,
});
