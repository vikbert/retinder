import React from 'react';
import {useDispatch} from 'react-redux';
import {createCategory} from "../../stores/categoryWidget";
import uuid from "../../utils/UUID";

const CategoryForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        let formElement = e.currentTarget;
        const formData = new FormData(formElement);
        dispatch(createCategory({
            id: uuid(),
            name: formData.get('category'),
        }));

        formElement.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="panel-block">
                <p className="control">
                    <input type="text"
                           className="input"
                           name="category"
                           placeholder="add new category"
                           required
                           minLength={3}/>
                </p>
            </div>
        </form>

    );
};

export default CategoryForm;
