import React from 'react';
import ReviewCards from "./components/ReviewCards";
import TopNav from "./components/TopNav";

const App = () => {
    const cards = JSON.parse(window.localStorage.getItem('cards'));
    const hasValidCards = !Array.isArray(cards) || cards.length === 0;

    return (
        <>
            <div className="section" style={{padding: "36px 1.5rem"}}>
                <TopNav/>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column">
                    <div className="container is-fluid" style={{padding: "0 16px"}}>
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
