import {combineReducers} from 'redux';
import cardWidget from "../cardWidget";
import userWidget from '../userWidget';
import categoryWidget from '../categoryWidget';

const rootReducer = combineReducers({
    cards: cardWidget,
    user: userWidget,
    categories: categoryWidget,
});

export default rootReducer;
