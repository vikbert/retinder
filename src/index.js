import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const cardData = [
    {
        image: 'https://placeimg.com/600/300/people',
        title: 'React components',
        description: 'this is reminder card for react components',
        category: 'bash',
    },
    {
        image: 'https://placeimg.com/600/300/nature',
        title: 'Git command',
        description: 'this is reminder card for git commands',
        category: 'bulma',
    },
];
window.localStorage.setItem('cards', JSON.stringify(cardData));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
