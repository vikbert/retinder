import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ReviewCards from "./components/ReviewCards";
import TopNav from "./components/TopNav";
import {loadCards} from "./stores/actions/cardAction";

const App = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.reduxCard);

    useEffect(() => {
        const localData = JSON.parse(window.localStorage.getItem('cards'));
        const invalidData = !Array.isArray(localData) || localData.length === 0;
        console.log('load from storage', localData);

        if (!invalidData) {
            console.log('dispatch: set data to redux');
            dispatch(loadCards(localData));
        }
    }, [dispatch]);
    
    console.log('render ', cards);

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
