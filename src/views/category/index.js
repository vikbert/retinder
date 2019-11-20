import React, { useState } from "react";
import CategoryForm from "../components/CategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../stores/categoryWidget";


const CategoryIndex = () => {
  const categories = useSelector(state => state.categories);
  const [inEdit, setInEdit] = useState(false);

  const dispatch = useDispatch();
  const handleDeleteCategory = id => {
    dispatch(deleteCategory(id));
  };

  /* eslint-disable-next-line*/
  const CategoryList = () => {
    return (
      <nav className="panel is-warning">
        <p className="panel-heading">Add Categories</p>
        <CategoryForm />
        {categories.allIds.map((id, index) => (
          <div key={id} className="panel-block is-flexible">
            <div className="is-pulled-right">
              <button
                className="delete is-medium"
                onClick={() => {
                  handleDeleteCategory(id);
                }}
              ></button>
            </div>
            {/* eslint-disable-next-line*/}
            <a style={{ paddingLeft: "1rem" }}>{categories.byId[id].name}</a>
          </div>
        ))}
      </nav>
    );
  };

  const handleClickEdit = () => {
    setInEdit(!inEdit);
  };

  return (
    <>
      <nav
        className="navbar is-fixed-top has-text-right is-primary"
        role="navigation"
        arial-label="main navigation"
        style={{ minHeight: "none" }}
      >
        <span onClick={handleClickEdit}>Edit</span>
      </nav>
      <section className="section title">
        <h1 className="title">Thema</h1>
      </section>

      <nav className="panel">
        {[...Array(20)].map((value, index) => (
          // eslint-disable-next-line
          <a key={index} className="panel-block has-icons-right">
            {inEdit && (
              <span className="panel-icon">
              <i
                className="fa-check-circle far"
                aria-hidden="true"
              ></i>
            </span>
            )}
            bulma - {index}
            <span className="panel-icon is-right">
              <i
                className="fa fa-angle-right"
                aria-hidden="true"
              ></i>
            </span>
          </a>
        ))}
      </nav>

      <nav
        className="navbar is-fixed-bottom has-text-right is-primary"
        role="navigation"
        arial-label="main navigation"
      >
        New Thema
      </nav>
    </>
  );
};

export default CategoryIndex;
