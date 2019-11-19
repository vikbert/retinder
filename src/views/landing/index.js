import React from 'react';
import ReviewIndex from "../review";
import {useSelector} from "react-redux";
import CategoryIndex from "../category";

const StartReview = () => {
    const cards = useSelector((state) => state.cards);
    
    return cards.allIds.length === 0
        ? <CategoryIndex/>
        : <ReviewIndex cards={cards}/>;
};

export default StartReview;
