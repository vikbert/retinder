import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from "./rootReducer";

export default function configureStore(initState) {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const composedEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initState,
        composedEnhancers(middlewareEnhancer),
    );
}
