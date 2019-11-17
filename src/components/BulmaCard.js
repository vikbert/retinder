import React from 'react';

const BulmaCard = ({card}) => {
    const {title, description, category} = card;
    const iconByCategory = (category) => {
        switch (category) {
            case 'bash':
                return 'fa fa-hashtag';
            case 'css':
                return 'fa fa-css3';
            case 'git':
                return 'fa fa-github';
            case 'js':
                return 'fa fa-js';
            case 'material':
                return 'fa fa-medium';
            case 'php':
                return 'fa fa-php';     
            case 'sf':
                return 'fa fa-symfony';
            case 'react':
                return 'fa fa-react';
            default:
                return 'fa fa-cat';
        }
    };

    return (
        <div className="card">
            <div className="card-image has-text-right">
                <span className="icon">
                    <i className="fa fa-home"></i>
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
