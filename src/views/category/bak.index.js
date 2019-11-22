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
        {[...Array(10)].map((value, index) => (
          // eslint-disable-next-line
          <a key={index} className="panel-block has-icons-right">
            {inEdit && (
              <span className="panel-icon">
                <i className="fa-check-circle far" aria-hidden="true"></i>
              </span>
            )}
            bulma - {index}
            <span className="panel-icon is-right">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </a>
        ))}
      </nav>

      <nav
        className="navbar is-fixed-bottom"
        role="navigation"
        arial-label="main navigation"
      >
        <div>neue Ordner</div>
      </nav>
    </>
  );
};

export default CategoryIndex;
