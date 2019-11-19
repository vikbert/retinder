import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createCard} from "../../stores/cardWidget";
import uuid from "../../utils/UUID";

const initialState = {
    title: '',
    description: '',
    category: 'bash',
};

const CardForm = ({closeModal = null}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCard({
            id: uuid(),
            ...formData,
        }));
        closeModal();
        e.currentTarget.reset();
    };

    const handleChange = (e) => {
        const newData = {...formData};
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    };

    return (
        <form className="box is-fullwidth" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor={'category'} className="label has-text-left">Category</label>
                <div className="control is-expanded">
                    <div className="select is-primary is-fullwidth">
                        <select name={'category'} onChange={handleChange} required>
                            <option value="" disabled>Choose Category</option>
                            <option value="bash">Bash</option>
                            <option value="bulma">Bulma</option>
                            <option value="git">Git & GitHub</option>
                            <option value="js">JavaScript</option>
                            <option value="material">Material UI</option>
                            <option value="php">PHP & Symfony</option>
                            <option value="react">react</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label htmlFor={'title'} className="label has-text-left">Title</label>
                <div className="control is-primary">
                    <input type="text"
                           name={'title'}
                           className="input is-primary"
                           required
                           onChange={handleChange}/>
                </div>
            </div>
            <div className="field">
                <label htmlFor="description" className="label has-text-left">Description</label>
                <div className="control">
                    <textarea className="textarea is-primary"
                              name={'description'}
                              required
                              onChange={handleChange}
                              rows={3}
                              placeholder={'Card description'}/>
                </div>
            </div>
            <div className="field ">
                <div className="control is-centered">
                    <button className="button is-success is-fullwidth" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CardForm;
