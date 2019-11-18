import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider as ReduxProvider} from 'react-redux';
import configureStore from "./stores/config/configureStore";

const store = configureStore();

store.subscribe(() => {
    const cards = store.getState().cardWidget;
    window.localStorage.setItem('cards', JSON.stringify(cards));
});

ReactDOM.render(
    <ReduxProvider store={store}>
        <App/>
    </ReduxProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
