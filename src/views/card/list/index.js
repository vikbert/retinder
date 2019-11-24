import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavTop from "../../components/NavTop";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import HeaderTitle from "../../components/HeadTitle";
import NavLinkNote from "../../components/NavLinkNote";
import styled, { css } from "styled-components";
import { primary, disabled } from "../../components/Color";

const inputWithoutBorder = css`
  border-style: none;
  background-color: transparent;
  padding: 8px 0;
  margin-bottom: 10px;
  width: 100%;
  :focus {
    outline: none;
    caret-color: ${primary};
  }
`;
const FullscreenModal = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
const MainContent = styled.div`
  padding: 10px 20px;
`;
const InputTitle = styled.input`
  ${inputWithoutBorder}
  margin-bottom: 10px;
  border-bottom: 1px solid ${disabled};
  font-size: 14px;
  :focus {
    border-bottom: 1px solid ${primary};
  }
`;

const TextContent = styled.textarea`
  ${inputWithoutBorder}
  height: 40vh;
`;

const CardIndex = () => {
  const location = useLocation();
  const [counter, setCounter] = useState(0);

  console.log(location.state);
  const { categoryId, categoryName } = location.state;
  console.log(categoryId, categoryName);

  return (
    <>
      <NavTop>
        <NavLink text="❮" position="left" disabled={false} route="/category" />
        {/* todo: show this title, if HeaderTitle not in view ports */}
        <NavLink text={""} position="center" />
        <NavLink text="Bearbeiten" position="right" disabled={counter === 0} />
      </NavTop>

      <section className="page-content bg">
        <HeaderTitle title={categoryName} />
      </section>

      <NavBottom>
        <NavLink text="ReviewAll" position="left" disabled={counter === 0} />
        <NavLinkNote text={counter ? `${counter} Karten` : "Keinen Karten"} />
        <NavLink text="Neue karte" position="right" />
      </NavBottom>

      {/* fullscreen new Card form */}
      <FullscreenModal>
        <NavTop>
          <NavLink text="Zurück" position="left" />
          <NavLink text="" position="center" />
          <NavLink text="Fertig" position="right" />
        </NavTop>
        <div className="page-content bg">
          <MainContent>
            <InputTitle type="text" placeholder="Card Title" />
            <TextContent placeholder="Card Diescription"></TextContent>
          </MainContent>
        </div>
      </FullscreenModal>
    </>
  );
};

export default CardIndex;
