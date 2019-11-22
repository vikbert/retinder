import React, { useState } from "react";
import { useDispatch } from "react-redux";

import clsx from "clsx";
import DeleteIcon from "../components/DeleteIcon";
import FolderIcon from "../components/FolderIcon";
import CheckedIcon from "../../assets/svg/CheckedIcon";
import CircleIcon from "../../assets/svg/CircleIcon";
import { deleteCategory } from "../../stores/categoryWidget";

export default function CategoryItem({ inEdit, category }) {
  const [clicked, setClicked] = useState(false);

  const handleClickOnItemContent = event => {
    event.preventDefault();
    setClicked(!clicked);
  };

  const dispatch = useDispatch();
  const handleDeleteCategory = id => {
    if (inEdit) {
      dispatch(deleteCategory(category.id));
    }
  };

  return (
    <>
      <div className={clsx("note-list-item-view", clicked && "selected")}>
        <div className="note-list-item-container">
          <div
            className="icon-container"
            onClick={() => {
              handleDeleteCategory(category.id);
            }}
          >
            {inEdit ? (
              clicked ? (
                <CheckedIcon />
              ) : (
                <CircleIcon />
              )
            ) : (
              <FolderIcon />
            )}
          </div>
          <div
            className="note-list-item-content"
            onClick={handleClickOnItemContent}
          >
            <div className="item">{category.name}</div>
            <div className="icon-enter">
              <span>0 </span>
              <span>❯</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
