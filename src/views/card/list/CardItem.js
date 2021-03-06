import React, { useState } from "react";
import styled from "styled-components";
import { lineItemSelected } from "../../components/Style";
import CardIcon from "../../components/svg/CardIcon";
import CheckedIcon from "../../components/svg/CheckedIcon";
import CircleIcon from "../../components/svg/CircleIcon";

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
  display: block;
`;

const RankingContainer = styled.div`
  font-size: 10px;
`;

export default function CardItem({
  inEdit,
  card,
  select = () => {},
  deselect = () => {},
  edit = () => {},
  category = null
}) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(false);

  const ListItemView = styled.div`
    display: flex;
    cursor: pointer;
    ${(selected || clicked) && lineItemSelected}
  `;

  const handleClickOnItemIcon = id => {
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

  const handleClickOnItemContent = e => {
    if (inEdit) {
      e.preventDefault();

      edit(card.id);
    }
  };

  if (!card) {
    return null;
  }

  return (
    <>
      <ListItemView>
        <ListItemContainer>
          <ListItemIcon onClick={() => handleClickOnItemIcon(card.id)}>
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
          <LineItemContent onClick={handleClickOnItemContent}>
            <ContentText>
              {card.title.length > 23
                ? card.title.slice(0, 23) + "..."
                : card.title}
              <RankingContainer>Ranking: {card.ranking}</RankingContainer>
            </ContentText>
          </LineItemContent>
        </ListItemContainer>
      </ListItemView>
    </>
  );
}
