import React, { useState } from "react";

import clsx from "clsx";
import FolderIcon from "../../components/FolderIcon";
import CheckedIcon from "../../../assets/svg/CheckedIcon";
import CircleIcon from "../../../assets/svg/CircleIcon";

export default function CategoryItem({
  inEdit,
  category,
  selectCategory,
  deselectCategory
}) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleClickOnItemContent = event => {
    event.preventDefault();
    setClicked(!clicked);
  };

  const handleClickOnIcon = id => {
    if (!inEdit) {
      return;
    }
    if (selected) {
      deselectCategory(category.id);
    } else {
      selectCategory(category.id);
    }

    setSelected(!selected);
    setClicked(!clicked);
  };

  return (
    <>
      <div className={clsx("note-list-item-view", clicked && "selected")}>
        <div className="note-list-item-container">
          <div
            className="icon-container"
            onClick={() => {
              handleClickOnIcon(category.id);
            }}
          >
            {inEdit ? (
              selected ? (
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
