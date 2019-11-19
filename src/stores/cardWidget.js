const CREATE_CARD = 'card.create_card';
const DELETE_CARD = 'card.delete_card';
const LOAD_CARDS = 'card.load_cards';

export const loadCards = (cards) => ({
    type: LOAD_CARDS,
    cards,
});

export const createCard = (card) => ({
    type: CREATE_CARD,
    card,
});

export const deleteCard = (id) => ({
    type: DELETE_CARD,
    id,
});

const initialState = {
    byId: {},
    allIds: [],
};
const reducer = (state = initialState, action) => {
    let cloned = {...state};
    let id;
    switch (action.type) {
        case CREATE_CARD:
            id = action.card.id;
            cloned.byId[id] = action.card;
            cloned.allIds = Object.keys(cloned.byId);
            return cloned;

        case DELETE_CARD:
            delete cloned.byId[action.id];
            cloned.allIds.filter((id) => {
                return id !== action.id;
            });
            return cloned;

        default:
            return state;
    }
};

export default reducer;
