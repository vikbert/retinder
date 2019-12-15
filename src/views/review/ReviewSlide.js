import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import NavBottom from "../components/NavBottom";
import NavLink from "../components/NavLink";
import NavTop from "../components/NavTop";
import { defaultPadding, primary } from "../components/Style";
import {
  FullscreenModal,
  ScreenCentered
} from "../components/StyledComponents";
import SadIcon from "../components/svg/SadIcon";
import SmileIcon from "../components/svg/SmileIcon";
import { updateCard } from "../card/cardWidget";

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

const SlideContent = styled.div`
  padding: 20px;
`;
const SlideTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 10px;
`;
const H4 = styled.h4`
  ${defaultPadding}
`;

export default function ReviewSlide({
  cardCounter,
  slideIndex,
  slideVisible,
  card = null,
  closeSlide = () => true,
  updateSlideIndex = () => true
}) {
  const dispatch = useDispatch();
  const handleCloseSlideView = () => {
    closeSlide();
  };

  const handleDecrementCardRanking = cardId => {
    dispatch(
      updateCard({
        ...card,
        ranking: card.ranking ? card.ranking - 1 : 100
      })
    );
    updateSlideIndex();
    if (cardCounter === slideIndex) {
      handleCloseSlideView();
    }
  };

  const handleIncrementCardRanking = cardId => {
    dispatch(
      updateCard({
        ...card,
        ranking: card.ranking ? card.ranking + 1 : 100
      })
    );
    updateSlideIndex();
    if (cardCounter === slideIndex) {
      handleCloseSlideView();
    }
  };

  const getDescriptionWithoutFirstLine = textblock => {
    var lines = textblock.split("\n");
    // remove one line, starting at the first position
    lines.splice(0, 1);
    // join the array back into a single string
    return lines.join("\n");
  };

  return (
    slideVisible && (
      <>
        <FullscreenModal>
          <NavTop style={{ zIndex: 101 }}>
            <NavLink text="" position="left" />
            <NavLink
              text={`${slideIndex} von ${cardCounter}`}
              position="center"
              disabled={false}
            />
            <NavLink
              text="Fertig"
              position="right"
              disabled={false}
              handleClick={handleCloseSlideView}
            />
          </NavTop>
          <section className="page-content bg default-padding">
            {card ? (
              <Slide>
                <SlideContent>
                  <SlideTitle>{card.title}</SlideTitle>
                  {getDescriptionWithoutFirstLine(card.description)}
                </SlideContent>
              </Slide>
            ) : (
              <ScreenCentered>
                <SmileIcon fill={primary} />
                <H4>Keine Karte gefunden!</H4>
              </ScreenCentered>
            )}
          </section>
          {card && (
            <NavBottom spaceEvenly={true}>
              <div onClick={handleDecrementCardRanking}>
                <SmileIcon />
              </div>
              <div onClick={handleIncrementCardRanking}>
                <SadIcon />
              </div>
            </NavBottom>
          )}
        </FullscreenModal>
      </>
    )
  );
}
