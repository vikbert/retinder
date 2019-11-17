import React, {useState} from 'react';
import EyeBlocked from "../assets/svg/EyeBlocked";
import EyePlus from "../assets/svg/EyePlus";
import CategoryList from "./CategoryList";
import BulmaCard from "./BulmaCard";

const ReviewCards = ({cards}) => {
    const [count, setCount] = useState(0);
    const currentCard = cards[count];

    const handleClickLove = (event) => {
        setCount(count + 1);
    };

    const handleClickNope = (event) => {
        setCount(count + 1);
    };

    if (!currentCard) {
        return <CategoryList/>;
    }

    return (
        <>
            <BulmaCard card={currentCard}/>
            <div className="tinder--buttons">
                <button id="nope" onClick={handleClickNope}>
                    <EyeBlocked/>
                </button>
                <button id="love" onClick={handleClickLove}>
                    <EyePlus/>
                </button>
            </div>
        </>
    );
};

export default ReviewCards;
