import {combineReducers} from "redux";
import cardWidget from "../../views/card/cardWidget";
import userWidget from "../userWidget";
import categoryWidget from "../../views/category/categoryWidget";

const rootReducer = combineReducers({
    cards: cardWidget,
    user: userWidget,
    categories: categoryWidget,
});

export default rootReducer;
