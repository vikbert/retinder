import React from 'react';
import RestartIcon from "../assets/svg/RestartIcon";
import CardForm from "./CardForm";

const Restart = () => {
    const handleRestart = () => {
        window.location.reload();
    };

    return (
        <div className="">
            <div className="">
                <CardForm/>
            </div>
            <div className="tinder--buttons">
                <button id="restart" onClick={handleRestart}>
                    <RestartIcon/>
                </button>
            </div>
        </div>
    );
};

export default Restart;
