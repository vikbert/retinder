import React from "react";
import styled from "styled-components";
import NavBottom from "../components/NavBottom";
import NavLink from "../components/NavLink";
import NavTop from "../components/NavTop";
import {
  FullscreenModal,
  ScreenCentered
} from "../components/StyledComponents";
import { primary, defaultPadding } from "../components/Style";
import SadIcon from "../components/svg/SadIcon";
import SmileIcon from "../components/svg/SmileIcon";

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
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

export default function ReviewSlide({ card = null, closeSlide = () => true }) {
  const handleCloseSlideView = () => {
    console.log("close slide view, back to cards list");
    closeSlide();
  };

  const handleSkipCard = () => {
    console.log("handle click on dislike");
  };

  const handleRepeatCard = () => {
    console.log("handle click on like");
  };

  return (
    <>
      <FullscreenModal>
        <NavTop>
          <NavLink text="" position="left" />
          <NavLink text="" position="center" disabled={false} />
          <NavLink
            text="fertig"
            position="right"
            disabled={false}
            handleClick={handleCloseSlideView}
          />
        </NavTop>
        <section className="page-content bg default-padding">
          {card ? (
            <Slide>
              <SlideContent>
                <SlideTitle>{"card title"}</SlideTitle>
                Dolor velit sit aliqua ut nisi mollit mollit eu excepteur
                eiusmod. Voluptate eiusmod veniam ullamco deserunt consequat qui
                fugiat in anim commodo amet occaecat ea Lorem. Culpa enim
                occaecat duis
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
          <NavBottom contentCentered={true}>
            <div onClick={handleSkipCard}>
              <SmileIcon />
            </div>
            <div onClick={handleRepeatCard}>
              <SadIcon />
            </div>
          </NavBottom>
        )}
      </FullscreenModal>
    </>
  );
}
