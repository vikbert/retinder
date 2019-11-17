import React from 'react';

const CardInput = ({name}) => (
    <div className="field">
        <div className="control is-primary">
            <input type="text" className="input is-primary"/>
        </div>
        <label htmlFor={name} className="label has-text-left">{name}</label>
    </div>
);

const CardTextarea = ({name}) => (
    <div className="field">
        <label htmlFor="description" className="label has-text-left">Description</label>
        <div className="control">
            <textarea className="textarea is-primary" placeholder={'Card description'}/>
        </div>
    </div>
);

const CardSelect = ({name}) => (
    <div className="field">
        <label htmlFor={name} className="label has-text-left">{name}</label>
        <div className="control is-expanded">
            <div className="select is-primary is-fullwidth">
                <select>
                    <option value="git">git</option>
                    <option value="sf">symfony</option>
                </select>
            </div>
        </div>
    </div>
);

const CardForm = () => (
    <div className="columns">
        <div className="column is-three-fifths">
            <form className="box is-fullwidth">
                <CardInput name={'title'}/>
                <CardTextarea name={'description'}/>
                {/*<CardSelect name={'category'}/>*/}
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button  is-success is-right">
                            Submit
                        </button>
                    </div>
                    <div className="control">
                        <button className="button is-light is-danger">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
);

export default CardForm;
