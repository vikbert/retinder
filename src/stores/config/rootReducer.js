import {combineReducers} from 'redux';
import cardWidget from "../cardWidget";
import userWidget from '../userWidget';
import categories from '../categoryWidget';

const rootReducer = combineReducers({
    cardWidget,
    userWidget,
    categories,
});

export default rootReducer;
