import React, {useState} from 'react';
import Card from "./Card";
import EyeBlocked from "../assets/svg/EyeBlocked";
import EyePlus from "../assets/svg/EyePlus";
import Restart from "./Restart";

const ReviewCards = ({cards}) => {
    const [count, setCount] = useState(0);
    const currentCard = cards[count];

    const handleClickLove = (event) => {
        setCount(count + 1);
    };

    const handleClickNope = (event) => {
        setCount(count + 1);
    };

    if (!currentCard || true) {
        return <Restart/>;
    }

    return (
        <div>
            <div className="tinder loaded">
                <div className="tinder--cards">
                    <Card card={currentCard}/>
                </div>
                <div className="tinder--buttons">
                    <button id="nope" onClick={handleClickNope}>
                        <EyeBlocked/>
                    </button>
                    <button id="love" onClick={handleClickLove}>
                        <EyePlus/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCards;
