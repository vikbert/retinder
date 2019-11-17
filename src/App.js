import React from 'react';
import ReviewCards from "./components/ReviewCards";
import TopNav from "./components/TopNav";

const App = () => {
    const cards = JSON.parse(window.localStorage.getItem('cards'));
    const hasValidCards = !Array.isArray(cards) || cards.length === 0;

    return (
        <>
            <div className="section">
                <TopNav/>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full">
                    <div className="container">
                        {hasValidCards
                            ? (
                                <div className="notification is-warning">
                                    The cards are not loaded correctly. Please try it later.
                                </div>
                            )
                            : <ReviewCards cards={cards}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
