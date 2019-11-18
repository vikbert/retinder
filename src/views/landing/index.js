import React, {useEffect} from 'react';
import ReviewIndex from "../review";
import {useDispatch, useSelector} from "react-redux";
import {loadCards} from "../../stores/cardWidget";

const StartReview = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cardWidget);

    useEffect(() => {
        let itemData = window.localStorage.getItem('cards');

        if (itemData) {
            dispatch(loadCards(JSON.parse(itemData)));
        }
    }, [dispatch]);

    const ErrorInfo = () => (
        <div className="notification is-warning">
            The cards are not loaded correctly. Please try it later.
        </div>
    );

    return cards.length === 0
        ? <ErrorInfo/>
        : <ReviewIndex cards={cards}/>;
};

export default StartReview;
