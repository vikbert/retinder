import React from "react";
import styled, { css } from "styled-components";
import { FullscreenModal, ControlFooter } from "../components/StyledComponents";
import NavTop from "../components/NavTop";
import NavLink from "../components/NavLink";
import RepeatIcon from "../components/svg/RepeatIcon";
import SkipIcon from "../components/svg/SkipIcon";
import CheckedIcon from "../components/svg/CheckedIcon";
import FolderIcon from "../components/svg/FolderIcon";

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;
const SlideContent = styled.div`
  padding: 10px;
`;
const SlideTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 10px;
`;
const itemStyled = css`
  width: 50%;
  text-align: center;
  padding: 8px 8px;
`;
const LeftButton = styled.div`
  ${itemStyled}
`;
const RightButton = styled.div`
  ${itemStyled}
  border-left: 1px solid #dedede;
`;

export default function ReviewSlide({ card }) {
  const handleCloseSlideView = () => {
    console.log("close slide view, back to cards list");
  };

  const handleDislike = () => {
    console.log("handle click on dislike");
  };

  const handleLike = () => {
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
          <Slide>
            <SlideContent>
              <SlideTitle>{"card title"}</SlideTitle>
              Dolor velit sit aliqua ut nisi mollit mollit eu excepteur eiusmod.
              Voluptate eiusmod veniam ullamco deserunt consequat qui fugiat in
              anim commodo amet occaecat ea Lorem. Culpa enim occaecat duis
              exercitation in quis reprehenderit. Ipsum quis eiusmod cillum
              eiusmod ea sit nostrud et tempor non culpa. Enim proident sint
              excepteur magna do anim ipsum. Nisi sit irure velit occaecat
              aliqua mollit.
            </SlideContent>
            <ControlFooter>
              <LeftButton onClick={handleDislike}>
                <FolderIcon />
              </LeftButton>
              <RightButton onClick={handleLike}>
                <RepeatIcon />
              </RightButton>
            </ControlFooter>
          </Slide>
        </section>
      </FullscreenModal>
    </>
  );
}
