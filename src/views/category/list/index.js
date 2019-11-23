import React, { useState } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import CategoryItem from "./CategoryItem";
import Reload from "../../components/Reload";
import Modal from "../form/CategoryForm";
import { deleteCategory } from "../categoryWidget";
import HeaderTitle from "../../components/HeadTitle";

const CategoryIndex = () => {
  const [inEdit, setInEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [title, setTitle] = useState("Ordner");

  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleClickOnEdit = () => {
    if (inEdit && selectedIds.length > 0) {
      window.location.reload();
    }

    setInEdit(!inEdit && categories.allIds.length > 0);
  };

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleClickDelete = e => {
    if (selectedIds.length === 0) {
      return;
    }

    selectedIds.forEach(id => {
      dispatch(deleteCategory(id));
    });
    window.location.reload();
  };

  const updateTitle = counter => {
    const newTitle = counter ? `${counter} ausgewählt` : "Ordner";
    setTitle(newTitle);
  };

  const selectCategory = id => {
    updateTitle(selectedIds.length + 1);
    setSelectedIds([id, ...selectedIds]);
  };

  const deselectCategory = id => {
    updateTitle(selectedIds.length - 1);
    setSelectedIds(
      selectedIds.filter(selectedId => {
        return id !== selectedId;
      })
    );
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
        <HeaderTitle title={title} />
        <CategoryItem inEdit={inEdit} category={{ name: "Alle karte" }} />
        {categories.allIds.length > 0 &&
          categories.allIds.map((id, index) => (
            <CategoryItem
              key={index}
              inEdit={inEdit}
              category={categories.byId[id]}
              selectCategory={selectCategory}
              deselectCategory={deselectCategory}
            />
          ))}
      </section>
      <nav className="nav bottom-nav">
        {inEdit ? (
          <>
            <Reload />
            <div
              className={clsx(
                "text-right",
                selectedIds.length === 0 && "text-disabled"
              )}
              onClick={handleClickDelete}
            >
              Löschen
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
