import {combineReducers} from 'redux';
import cardWidget from "../cardWidget";
import userWidget from '../userWidget';

const rootReducer = combineReducers({
    cardWidget,
    userWidget,
});

export default rootReducer;
