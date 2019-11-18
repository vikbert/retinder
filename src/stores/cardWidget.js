const ADD_CARD = 'card.ADD_CARD';
const LOAD_CARDS = 'card.LOAD_CARDS';

export const addCard = (card) => ({
    type: ADD_CARD,
    card,
});

export const loadCards = (cards) => ({
    type: LOAD_CARDS,
    cards,
});

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [action.card, ...state];
        case LOAD_CARDS:
            return action.cards;
        default:
            return state;
    }
};

export default reducer;
