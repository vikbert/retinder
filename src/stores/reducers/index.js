import {combineReducers} from 'redux';
import {initialStateCard, reducerCard} from './cardReducer';

const appReducer = combineReducers({
    reduxCard: reducerCard,
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export const initialState = {
    reduxCard: initialStateCard,
};
