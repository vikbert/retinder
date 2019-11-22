import React, { useState } from "react";
import clsx from "clsx";
import DeleteIcon from "../components/DeleteIcon";
import FolderIcon from "../components/FolderIcon";

export default function CategoryItem({ inEdit, category }) {
  const [clicked, setClicked] = useState(false);

  const handleClickOnItemContent = event => {
    event.preventDefault();
    setClicked(!clicked);
  };

  return (
    <>
      <div className={clsx("note-list-item-view", clicked && "selected")}>
        <div className="note-list-item-container">
          <div className="icon-container">
            {inEdit ? <DeleteIcon /> : <FolderIcon />}
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
