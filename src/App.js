import React from 'react';
import ReviewCards from "./components/ReviewCards";

const App = () => {
    const cards = JSON.parse(window.localStorage.getItem('cards'));
    const hasValidCards = !Array.isArray(cards) || cards.length === 0;

    return hasValidCards
        ? <h2>No cards loaded</h2>
        : <ReviewCards cards={cards}/>;

};

export default App;
