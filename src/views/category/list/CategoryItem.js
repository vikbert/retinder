import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lineItemSelected } from "../../components/Color";
import CheckedIcon from "../../components/svg/CheckedIcon";
import CircleIcon from "../../components/svg/CircleIcon";
import FolderIcon from "../../components/svg/FolderIcon";

const ListItemIcon = styled.div`
  padding: 10px 16px 4px 20px;
`;
const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
  border-bottom: 1px solid hsla(0, 0%, 52.9%, 0.2);
`;
const LineItemContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px 0;
`;
const CardCounter = styled.span`
  padding-right: 6px;
`;
const ContentCounter = styled.div`
  color: rgb(145, 143, 137);
  padding-right: 20px;
`;
const ContentText = styled.div`
  margin-right: auto;
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

  const ListItemView = styled.div`
    display: flex;
    cursor: pointer;
    ${(selected || clicked) && lineItemSelected}
  `;

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
      <ListItemView>
        <ListItemContainer>
          <ListItemIcon onClick={() => handleClickOnIcon(category.id)}>
            {inEdit && category.id ? (
              selected ? (
                <CheckedIcon />
              ) : (
                <CircleIcon />
              )
            ) : (
              <FolderIcon />
            )}
          </ListItemIcon>
          <Link
            to={{
              pathname: category.id ? `/card/${category.id}` : "/card",
              state: { categoryName: category.name, categoryId: category.id }
            }}
            className="clickable-item"
          >
            <LineItemContent onClick={handleClickOnItemContent}>
              <ContentText>{category.name}</ContentText>
              <ContentCounter>
                <CardCounter>{cardCounter}</CardCounter>
                <span>❯</span>
              </ContentCounter>
            </LineItemContent>
          </Link>
        </ListItemContainer>
      </ListItemView>
    </>
  );
}
