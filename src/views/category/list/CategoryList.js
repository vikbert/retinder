import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderTitle from "../../components/HeadTitle";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import NavReload from "../../components/NavReload";
import NavTop from "../../components/NavTop";
import { deleteCategory } from "../categoryWidget";
import CategoryItem from "./CategoryItem";
import CategoryForm from "../form/CategoryForm";

const CategoryIndex = ({ props }) => {
  const [inEdit, setInEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [title, setTitle] = useState("Ordner");

  const categories = useSelector(state => state.categories);
  const counterOfAllCards = useSelector(state => state.cards.count);
  const dispatch = useDispatch();

  const handleClickOnEdit = () => {
    if (inEdit && selectedIds.length > 0) {
      setTitle("Ordner");
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

    selectedIds.forEach(categoryId => {
      if (categories.byId[categoryId].cards.length === 0) {
        dispatch(deleteCategory(categoryId));
      }
    });
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
        <NavLink position="left" text="" />
        {/* todo: use ref, if headtile not in view ports, then show the title */}
        <NavLink position="center" text="" />
        <NavLink
          position="right"
          text={inEdit ? "Abbrechen" : "Bearbeiten"}
          handleClick={handleClickOnEdit}
        />
      </NavTop>

      <section className="page-content bg">
        {modalOpen && <CategoryForm closeModal={handleToggleModal} />}
        <HeaderTitle title={title} />
        <CategoryItem
          inEdit={inEdit}
          category={{ name: "Alle karte", countAllCards: counterOfAllCards }}
        />
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
            <NavReload />
            <NavLink
              text="Löschen"
              position="right"
              disabled={selectedIds.length === 0}
              handleClick={handleClickDelete}
            />
          </>
        ) : (
          <>
            <NavReload></NavReload>
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
