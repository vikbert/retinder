import React, {useState} from "react";
import EyeBlocked from "../../assets/svg/EyeBlocked";
import EyePlus from "../../assets/svg/EyePlus";
import BulmaCard from "../components/BulmaCard";
import CategoryIndex from "../category/list";

const ReviewIndex = ({cards}) => {
    const ids = cards.allIds;
    const [currentId, setCurrentId] = useState(ids.shift());

    const handleClickLove = event => {
        setCurrentId(ids.shift());
    };

    const handleClickNope = event => {
        setCurrentId(ids.shift());
    };

    if (cards.allIds.length === 0) {
        return <CategoryIndex/>;
    }

    return (
        <>
            <BulmaCard card={cards.byId[currentId]}/>
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
