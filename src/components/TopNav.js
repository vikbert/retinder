import React from 'react';

const TopNav = () => (
    <nav className="navbar is-primary is-fixed-top" role="navigation">
        <div className="navbar-brand">
            <a className="navbar-item is-expanded is-block has-text-centered"
               href="/#"
            >
                <i className="fa fa-list"></i>
                <p className="is-size-7">Categories</p>
            </a>
            <a className="navbar-item is-expanded  is-block has-text-centered"
               href="/#"
            >
                <i className="fa fa-plus"></i>
                <p className="is-size-7">New Card</p>
            </a>
            <a className="navbar-item is-expanded  is-block has-text-centered"
               onClick={() => window.location.reload()}
               href="/#"
            >
                <i className="fa fa-retweet"></i>
                <p className="is-size-7">Reload</p>
            </a>
        </div>
    </nav>
);

export default TopNav;
