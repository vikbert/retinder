import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import Reload from "../components/Reload";
import Modal from "../components/Modal";

const CategoryIndex = () => {
  const [inEdit, setInEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const categories = useSelector(state => state.categories);

  const handleClickOnEdit = () => {
    setInEdit(!inEdit);
  };

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleClickDeleteAll = e => {
    console.log("TODO: implement delete all categories");
  };

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
        {modalOpen && <Modal closeModal={handleToggleModal} />}
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
            <div className="text-right" onClick={handleClickDeleteAll}>
              Löschen All
            </div>
          </>
        ) : (
          <>
            <Reload />
            <div className="text-right" onClick={handleToggleModal}>
              Neuer Ordner
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default CategoryIndex;
