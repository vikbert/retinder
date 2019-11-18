import React from 'react';

const BulmaCard = ({card}) => {
    const {title, description} = card;

    return (
        <div className="card">
            <div className="card-image has-text-centered has-background-warning">
                <span className="title is-6">{title}</span>
            </div>
            <div className="card-content">
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default BulmaCard;
