import React, {useState} from 'react';
import CardForm from "./CardForm";
import classNames from 'classnames';

const TopNav = () => {
    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleOpenModal = () => {
        setOpen(!open);
    };

    return (
        <>
            <nav className="navbar is-primary is-fixed-top" role="navigation">
                <div className="navbar-brand">
                    <span className="navbar-item is-expanded is-block has-text-centered">
                        <i className="fa fa-list"></i>
                        <p className="is-size-7">Categories</p>
                    </span>
                    <span className="navbar-item is-expanded  is-block has-text-centered"
                          onClick={handleOpenModal}>
                        <i className="fa fa-plus"></i>
                        <p className="is-size-7">New Card</p>
                    </span>
                    <span className="navbar-item is-expanded  is-block has-text-centered"
                          onClick={() => window.location.reload()}>
                        <i className="fa fa-retweet"></i>
                        <p className="is-size-7">Reload</p>
                    </span>
                </div>
            </nav>
            <div className={classNames('modal', {'is-active': open})}>
                <div className="modal-background" onClick={handleCloseModal}></div>
                <div className="modal-content" style={{width: '100%'}}>
                    <CardForm closeModal={handleCloseModal}/>
                </div>
                <button className="modal-close" onClick={handleCloseModal}></button>
            </div>
        </>
    );
};

export default TopNav;
