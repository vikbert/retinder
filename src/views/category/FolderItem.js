import React, { useState } from "react";
import clsx from "clsx";
import DeleteIcon from "../components/DeleteIcon";

export default function FolderItem() {
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
            {/* <FolderIcon /> */}
            <DeleteIcon />
          </div>
          <div
            className="note-list-item-content"
            onClick={handleClickOnItemContent}
          >
            <div className="item">item</div>
            <div className="enter">❯</div>
          </div>
        </div>
      </div>
    </>
  );
}
