import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { deleteCategory } from "../../stores/categoryWidget";
import CategoryForm from "../components/CategoryForm";
import Reload from "../components/Reload";

const CategoryIndex = () => {
  const [inEdit, setInEdit] = useState(false);
  const categories = useSelector(state => state.categories);

  const dispatch = useDispatch();
  const handleDeleteCategory = id => {
    dispatch(deleteCategory(id));
  };

  const handleClickOnEdit = () => {
    setInEdit(!inEdit);
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

  const handleScrollOnPage = () => {};
  return (
    <>
      <nav className="nav top-nav">
        <div></div>
        <div className="text-center">Ordner</div>
        <div className="text-right" onClick={handleClickOnEdit}>
          {inEdit ? "Fertig" : "Bearbeiten"}
        </div>
      </nav>

      <section className="page-content">
        {categories.allIds.length > 0 &&
          categories.allIds.map((id, index) => (
            <CategoryItem
              key={index}
              inEdit={inEdit}
              category={categories.byId[id]}
            />
          ))}
      </section>
      <nav className="nav bottom-nav">
        {inEdit ? (
          <>
            <Reload />
            <div className="text-right">Löschen</div>
          </>
        ) : (
          <>
            <Reload />
            <div className="text-right">Neuer Ordner</div>
          </>
        )}
      </nav>
    </>
  );
};

export default CategoryIndex;
