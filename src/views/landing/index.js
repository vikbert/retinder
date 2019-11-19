import React, {useEffect} from 'react';
import ReviewIndex from "../review";
import {useDispatch, useSelector} from "react-redux";
import {loadCards} from "../../stores/cardWidget";

const StartReview = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cardWidget);

    // useEffect(() => {
    //     let retinder = window.localStorage.getItem('retinder');
    //
    //     if (retinder) {
    //         dispatch(loadCards(JSON.parse(retinder.cards)));
    //     }
    // }, [dispatch]);

    const ErrorInfo = () => (
        <div className="notification is-warning">
            The cards are not loaded correctly. Please try it later.
        </div>
    );

    return cards.allIds.length === 0
        ? <ErrorInfo/>
        : <ReviewIndex cards={cards}/>;
};

export default StartReview;
