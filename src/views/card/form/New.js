import React from "react";
import styled, { css } from "styled-components";
import { disabled, primary } from "../../components/Color";
import NavLink from "../../components/NavLink";
import NavTop from "../../components/NavTop";

const FullscreenModal = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
const inputWithoutBorder = css`
  font-size: 16px;
  border-style: none;
  border-radius: 0;
  -webkit-appearance: none;
  background-color: transparent;
  padding: 8px 0;
  margin-bottom: 10px;
  width: 100%;
  :focus {
    outline: none;
    caret-color: ${primary};
  }
`;
const InputTitle = styled.input`
  ${inputWithoutBorder}
  font-weight: 700;
  margin-bottom: 10px;
  border-bottom: 1px solid ${disabled};
  :focus {
    border-bottom: 1px solid ${primary};
  }
`;
const ContentContainer = styled.div`
  padding: 10px 20px;
`;

const TextContent = styled.textarea`
  ${inputWithoutBorder}
  height: 40vh;
`;
const CardNew = () => {
  return (
    <>
      <FullscreenModal>
        <NavTop>
          <NavLink text="Zurück" position="left" />
          <NavLink text="" position="center" />
          <NavLink text="Fertig" position="right" />
        </NavTop>
        <div className="page-content bg">
          <ContentContainer>
            <InputTitle type="text" placeholder="Card Title" />
            <TextContent placeholder="Card Diescription"></TextContent>
          </ContentContainer>
        </div>
      </FullscreenModal>
    </>
  );
};

export default CardNew;
