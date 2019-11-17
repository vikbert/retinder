import {createStore} from 'redux';
import {initialState, rootReducer} from './reducers';

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
    );
}
