import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createCard} from "../../stores/cardWidget";
import uuid from "../../utils/UUID";

const initialState = {
    title: '',
    description: '',
    category: 'bash',
};

const CardForm = ({closeModal = null}) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    
    const [formData, setFormData] = useState(initialState);
    const [visible, setVisible] = useState(false);

    const SuccessMessage = () => {
        return (
            <span className="is-size-7-mobile has-text-success">
                Saved ✔︎
            </span>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCard({
            id: uuid(),
            ...formData,
        }));

        e.currentTarget.reset();
        setVisible(true);

        window.setTimeout(() => {
            setVisible(false);
        }, 3000);
    };

    const handleChange = (e) => {
        const newData = {...formData};
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    };

    const CategoryOption = ({category}) => {
        const {id, name} = category;
        return <option value={id}>{name}</option>;
    };
    
    return (
        <form className="box is-fullwidth" onSubmit={handleSubmit}>
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column"></div>
                    <div className="column has-text-centered">
                        <h3 className="is-2 is-uppercase">Add new card</h3>
                    </div>
                    <div className="column has-text-right">
                        {visible && <SuccessMessage/>}
                    </div>
                </div>
            </div>
            <div className="field">
                <label htmlFor={'category'} className="label has-text-left">Category</label>
                <div className="control is-expanded">
                    <div className="select is-primary is-fullwidth">
                        <select name={'category'} onChange={handleChange} required>
                            {categories.allIds.map((categoryId, index) => (
                                <CategoryOption key={categoryId} category={categories.byId[categoryId]}/>
                            ))}
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
                    <button className="button is-primary is-fullwidth" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CardForm;
