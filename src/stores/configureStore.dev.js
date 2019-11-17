import {compose, createStore} from 'redux';
import {initialState, rootReducer} from './reducers';

export default function configureStore() {
    const composerEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initialState,
        composerEnhancers(),
    );
}
