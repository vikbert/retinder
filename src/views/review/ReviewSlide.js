import React from "react";
import styled, { css } from "styled-components";
import { FullscreenModal, ControlFooter } from "../components/StyledComponents";
import NavTop from "../components/NavTop";
import NavLink from "../components/NavLink";
const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const SlideContent = styled.div`
  padding: 10px;
`;
const itemStyled = css`
  width: 50%;
  text-align: center;
  padding: 12px 8px;
`;
const LeftButton = styled.div`
  ${itemStyled}
`;
const RightButton = styled.div`
  ${itemStyled}
  border-left: 1px solid #dedede;
`;

export default function ReviewSlide() {
  const handleCloseSlideView = () => {
    console.log("close slide view, back to cards list");
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
              Dolor velit sit aliqua ut nisi mollit mollit eu excepteur eiusmod.
              Voluptate eiusmod veniam ullamco deserunt consequat qui fugiat in
              anim commodo amet occaecat ea Lorem. Culpa enim occaecat duis
              exercitation in quis reprehenderit. Ipsum quis eiusmod cillum
              eiusmod ea sit nostrud et tempor non culpa. Enim proident sint
              excepteur magna do anim ipsum. Nisi sit irure velit occaecat
              aliqua mollit.
            </SlideContent>
            <ControlFooter>
              <LeftButton>dislike</LeftButton>
              <RightButton>like</RightButton>
            </ControlFooter>
          </Slide>
        </section>
      </FullscreenModal>
    </>
  );
}
