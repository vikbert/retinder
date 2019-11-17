import React from 'react';

const BulmaCard = ({card}) => {
    const {title, description} = card;

    return (
        <div className="card">
            <div className="card-image has-text-right">
                <span className="icon">
                    <i className="fa fa-info"></i>
                </span>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <span className="title is-4">{title}</span>
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
