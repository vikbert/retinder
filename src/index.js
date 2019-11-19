import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/bulma.min.css';
import * as serviceWorker from './serviceWorker';

import {Provider as ReduxProvider} from 'react-redux';
import configureStore from "./stores/config/configureStore";
import {storageGet, storageSet} from "./utils/LocalStorage";

let retinderReduxData = storageGet('retinder');
if (retinderReduxData) {
    retinderReduxData = JSON.parse(retinderReduxData);
}

const store = configureStore(retinderReduxData);

store.subscribe(() => {
    const categories = store.getState().categories;
    const cards = store.getState().cards;
    const user = store.getState().user;
    const retinder = {
        categories,
        cards,
        user,
    };

    storageSet('retinder', JSON.stringify(retinder));
});

if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept();
    const NextApp = require('./App').default;
    ReactDOM.render(
        <ReduxProvider store={store}>
            <NextApp/>
        </ReduxProvider>,
        document.getElementById('root'),
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
