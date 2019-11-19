import {applyMiddleware, compose, createStore} from 'redux';
import loggerMiddleware from 'redux-logger';
import rootReducer from "./rootReducer";


export default function configureStore() {
    // const middlewares = [loggerMiddleware];
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const composedEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        undefined,
        composedEnhancers(middlewareEnhancer),
    );
}
