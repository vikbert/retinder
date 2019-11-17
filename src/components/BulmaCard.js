import React from 'react';

const BulmaCard = ({card}) => {
    const {title, description, category} = card;

    return (
        <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">#{category}</p>
                    </div>
                </div>

                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default BulmaCard;
