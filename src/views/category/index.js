import React from 'react';
import CategoryForm from "../components/CategoryForm";
import {useDispatch, useSelector} from "react-redux";
import {deleteCategory} from "../../stores/categoryWidget";

const CategoryIndex = () => {
    const categories = useSelector((state) => state.categories);
    
    const dispatch = useDispatch();
    const handleDeleteCategory = (id) => {
        dispatch(deleteCategory(id));
    };

    return (
        <>
            <nav className="panel is-warning">
                <p className="panel-heading">Add Categories</p>
                <CategoryForm/>
                {categories.allIds.map((id, index) => (
                    <div key={id} className="panel-block is-flexible">
                        <div className="is-pulled-right">
                            <button className="delete is-medium"
                                    onClick={() => {
                                        handleDeleteCategory(id);
                                    }}>
                            </button>
                        </div>
                        <a style={{paddingLeft: '1rem'}}>{categories.byId[id].name}</a>
                    </div>
                ))}
            </nav>
        </>
    );
};

export default CategoryIndex;
