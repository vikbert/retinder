import React, { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import FolderIcon from "../../components/svg/FolderIcon";
import CheckedIcon from "../../components/svg/CheckedIcon";
import CircleIcon from "../../components/svg/CircleIcon";

const CardCounter = styled.span`
  padding-right: 6px;
`;
export default function CategoryItem({
  cardCounter = 0,
  inEdit,
  category,
  selectCategory = () => {},
  deselectCategory = () => {}
}) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleClickOnItemContent = () => {
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
            {inEdit && category.id ? (
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
              <CardCounter>{cardCounter}</CardCounter>
              <span>❯</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
