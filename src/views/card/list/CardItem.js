import React, { useState } from "react";
import styled from "styled-components";
import { lineItemSelected } from "../../components/Style";
import CheckedIcon from "../../components/svg/CheckedIcon";
import CircleIcon from "../../components/svg/CircleIcon";
import CardIcon from "../../components/svg/CardIcon";

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
const ContentText = styled.div`
  margin-right: auto;
`;

export default function CardItem({
  inEdit,
  card,
  select = () => {},
  deselect = () => {}
}) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(false);

  const ListItemView = styled.div`
    display: flex;
    cursor: pointer;
    ${(selected || clicked) && lineItemSelected}
  `;

  const handleClickOnItem = id => {
    if (!inEdit) {
      return;
    }
    if (selected) {
      deselect(card.id);
    } else {
      select(card.id);
    }

    setSelected(!selected);
    setClicked(!clicked);
  };

  if (!card) {
    return null;
  }
  return (
    <>
      <ListItemView>
        <ListItemContainer>
          <ListItemIcon onClick={() => handleClickOnItem(card.id)}>
            {inEdit && card.id ? (
              selected ? (
                <CheckedIcon />
              ) : (
                <CircleIcon />
              )
            ) : (
              <CardIcon />
            )}
          </ListItemIcon>
          <LineItemContent
            onClick={() => {
              handleClickOnItem(card.id);
            }}
          >
            <ContentText>
              {card.description.length > 18
                ? card.description.slice(0, 18) + "..."
                : card.description}
            </ContentText>
          </LineItemContent>
        </ListItemContainer>
      </ListItemView>
    </>
  );
}
