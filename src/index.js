import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/bulma.min.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider as ReduxProvider} from 'react-redux';
import configureStore from "./stores/config/configureStore";
import {storageSet} from "./utils/LocalStorage";

// const URL_TODOS = 'https://vikbert-software.de/api/re.php';
// export const saveTodos = (todos = []) => {
//     return fetch(URL_TODOS, {
//         method: 'POST',
//         // mode: 'no-cors',
//         body: JSON.stringify(todos),
//     }).catch((error) => {
//         console.error('POST todos failed: ', error);
//     });
// };
//
// export const loadTodos = () => {
//     return fetch(URL_TODOS, {
//         method: 'GET',
//         // mode: 'no-cors',
//     }).then((resp) => {
//         return resp.json()
//     }).catch((error) => {
//         console.error('Loading todos failed: ', error);
//     });
// };

const store = configureStore();
store.subscribe(() => {
    const categories = store.getState().categories;
    const cards = store.getState().cardWidget;
    const retinder = {
        categories,
        cards,
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
