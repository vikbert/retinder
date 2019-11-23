import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderTitle from "../../components/HeadTitle";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import NavTop from "../../components/NavTop";
import { deleteCategory } from "../categoryWidget";
import Modal from "../form/CategoryForm";
import CategoryItem from "./CategoryItem";
import Reload from "../../components/Reload";

const CategoryIndex = () => {
  const [inEdit, setInEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [title, setTitle] = useState("Ordner");

  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleClickOnEdit = () => {
    console.log("####");
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
      <NavTop>
        <NavLink position="left" text=""></NavLink>
        <NavLink position="center" text="Ordner"></NavLink>
        <NavLink
          position="right"
          text={inEdit ? "Fertig" : "Bearbeiten"}
          handleClick={handleClickOnEdit}
        ></NavLink>
      </NavTop>

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
      <NavBottom>
        {inEdit ? (
          <>
            <Reload></Reload>
            <NavLink
              text="Löschen"
              position="right"
              disabled={selectedIds.length === 0}
              handleClick={handleClickDelete}
            />
          </>
        ) : (
          <>
            <Reload></Reload>
            <NavLink
              text="Neuer Ordner"
              position="right"
              handleClick={handleToggleModal}
            />
          </>
        )}
      </NavBottom>
    </>
  );
};

export default CategoryIndex;
