import React from 'react';
import CategoryForm from "../components/CategoryForm";
import {useSelector} from "react-redux";

const CategoryIndex = () => {
    const categories = useSelector((state) => state.categories);
    console.log(categories);

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <CategoryForm/>
                    {categories.allIds.map((id, index) => (
                        <p key={index}>{id}</p>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default CategoryIndex;
