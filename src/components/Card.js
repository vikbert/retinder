import React from 'react';

const Card = ({card}) => {
    const {title, description, category} = card;

    return (
        <div className="tinder--card">
            <div className="image--container">
                <img className="cover" src={require('../assets/images/' + category + '.png')} alt={'people'}/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
