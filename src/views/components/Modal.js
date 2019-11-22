import React from "react";
import { useDispatch } from "react-redux";
import uuid from "../../utils/UUID";
import styled, { css } from "styled-components";
import { H5 } from "./Typography";
import { createCategory } from "../../stores/categoryWidget";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.3);
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  max-width: 100%;
  height: 160px;
  max-height: 100%;

  position: fixed;
  z-index: 100;
  left: 50%;
  right: 50%;
  top: 40%;

  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0 6 1px rbga(0, 0, 0, 9);

  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -khtml-border-radius: 5px;
`;
const ControlFooter = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  border-top: 1px solid #dedede;
`;

const itemStyled = css`
  width: 50%;
  text-align: center;
  padding: 8px;
`;
const CancelButton = styled.div`
  color: #cf9707;
  ${itemStyled}
`;
const SaveButton = styled.div`
  border-left: 1px solid #dedede;
  ${itemStyled}
`;
const Content = styled.div`
  text-align: center;
  padding: 16px;
`;

const Input = styled.input`
  width: 100%;
  margin: 16px 0;
  border: 1px solid #cf9707;
  padding: 8px;
  font-size: 1rem;
`;

export default function Modal({ closeModal }) {
  const [category, setCategory] = React.useState("");

  const handleClickOnCancel = event => {
    closeModal();
  };

  const dispatch = useDispatch();
  const handleClickOnSave = () => {
    dispatch(
      createCategory({
        id: uuid(),
        name: category
      })
    );

    closeModal();
  };

  const handleOnChange = e => {
    setCategory(e.target.value);
  };

  return (
    <>
      <ModalOverlay></ModalOverlay>
      <ModalWrapper>
        <Content>
          <H5>Neuer Ordner</H5>
          <Input type="text" value={category} onChange={handleOnChange}></Input>
        </Content>
        <ControlFooter>
          <CancelButton onClick={handleClickOnCancel}>Abbrechen</CancelButton>
          <SaveButton onClick={handleClickOnSave}>Speichern</SaveButton>
        </ControlFooter>
      </ModalWrapper>
    </>
  );
}
