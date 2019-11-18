import React, {useState} from 'react';
import EyeBlocked from "../../assets/svg/EyeBlocked";
import EyePlus from "../../assets/svg/EyePlus";
import BulmaCard from "../components/BulmaCard";
import CategoryIndex from "../category";

const ReviewIndex = ({cards}) => {
    const [count, setCount] = useState(0);

    const handleClickLove = (event) => {
        setCount(count + 1);
    };

    const handleClickNope = (event) => {
        setCount(count + 1);
    };

    if (cards.length === count) {
        return <CategoryIndex/>;
    }

    return (
        <>
            <BulmaCard card={cards[count]}/>
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

export default ReviewIndex;
