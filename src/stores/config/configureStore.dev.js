import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import loggerMiddleware from 'redux-logger';
import cardWidget from "../cardWidget";

const rootReducer = combineReducers({
    cardWidget,
});

export default function configureStore() {
    const middlewares = [loggerMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const composedEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        undefined,
        composedEnhancers(middlewareEnhancer),
    );
}
