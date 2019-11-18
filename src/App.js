import React, {useEffect} from 'react';
import ReviewCards from "./views/components/ReviewCards";
import TopNav from "./views/components/TopNav";
import {useDispatch, useSelector} from "react-redux";
import {loadCards} from "./stores/cardWidget";

const App = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cardWidget);

    useEffect(() => {
        let itemData = window.localStorage.getItem('cards');

        if (itemData) {
            dispatch(loadCards(JSON.parse(itemData)));
        }
    }, [dispatch]);
    
    return (
        <>
            <div className="section" style={{padding: "36px 1.5rem"}}>
                <TopNav/>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column">
                    <div className="container is-fluid" style={{padding: "0 16px"}}>
                        {cards.length === 0
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
