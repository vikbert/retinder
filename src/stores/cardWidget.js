const CREATE_CARD = 'card.create_card';
const LIST_CARD = 'card.list_card';

export const addCard = (card) => ({
    type: CREATE_CARD,
    card,
});

export const listCard = (cards) => ({
    type: LIST_CARD,
    cards,
});

const reducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_CARD:
            return [action.card, ...state];
        case LIST_CARD:
            return action.cards;
        default:
            return state;
    }
};

export default reducer;
