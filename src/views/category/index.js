import React from 'react';
import CategoryForm from "../components/CategoryForm";
import {useSelector} from "react-redux";

const CategoryIndex = () => {
    const categories = useSelector((state) => state.categories);
    console.log('##', categories.byId);
    console.log('##', categories.allIds);

    return (
        <>
            <nav className="panel is-warning">
                <p className="panel-heading">
                    Categories-f
                </p>
                <CategoryForm/>
                {categories.allIds.map((id, index) => (
                    <span key={id} className="panel-block is-active">
                        <span className="panel-icon">●</span>
                        {categories.byId[id].name}
                        <span className="panel-icon is-right">●</span>
                    </span>
                    
                ))}
            </nav>
        </>
    );
};

export default CategoryIndex;
