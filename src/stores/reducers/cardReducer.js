import {ADD_CARD, LOAD_CARDS} from '../actions/cardAction';

export const initialStateCard = [];

export const reducerCard = (state = initialStateCard, action) => {
    switch (action.type) {
        case ADD_CARD:
            return [action.card, ...state];
        case LOAD_CARDS:
            return action.cards;
        default:
            return state;
    }
};
