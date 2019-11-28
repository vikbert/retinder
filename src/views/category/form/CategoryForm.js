import React from "react";
import {useDispatch} from "react-redux";
import styled, {css} from "styled-components";
import {ControlFooter} from "../../components/StyledComponents";
import uuid from "../../../utils/UUID";
import {H5} from "../../components/Typography";
import {createCategory} from "../categoryWidget";

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
  top: 35%;

  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0 6 1px rbga(0, 0, 0, 9);

  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -khtml-border-radius: 5px;
`;

const itemStyled = css`
  width: 50%;
  text-align: center;
  padding: 12px 8px;
`;
const CancelButton = styled.div`
  color: #cf9707;
  ${itemStyled}
`;
const InactiveSaveButton = styled.div`
  ${itemStyled}
  border-left: 1px solid #dedede;
`;
const ActiveSaveButton = styled.div`
  ${itemStyled}
  border-left: 1px solid #dedede;
  color: #cf9707;
`;
const Content = styled.div`
  text-align: center;
  padding: 16px;
`;

const Input = styled.input`
  width: 100%;
  margin: 12px 0;
  border: 1px solid #cf9707;
  padding: 8px;
  font-size: 1rem;
`;

export default function Modal({closeModal}) {
    const [category, setCategory] = React.useState("");
    const categoryFieldRef = React.useRef(null);

    const SaveButton =
        category.trim().length > 0 ? ActiveSaveButton : InactiveSaveButton;

    React.useEffect(() => {
        categoryFieldRef.current.focus();
    });

    const handleClickOnCancel = event => {
        closeModal();
    };

    const dispatch = useDispatch();
    const handleClickOnSave = () => {
        if (category.trim().length === 0) {
            return false;
        }

        dispatch(
            createCategory({
                id: uuid(),
                name: category,
                cards: [],
            }),
        );

        closeModal();
    };

    const handleOnChange = e => {
        setCategory(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClickOnSave();
        }
    };

    return (
        <>
            <ModalOverlay></ModalOverlay>
            <ModalWrapper>
                <Content>
                    <H5>Neuer Ordner</H5>
                    <Input
                        autoFocus
                        ref={categoryFieldRef}
                        type="text"
                        value={category}
                        onChange={handleOnChange}
                        onKeyDown={handleKeyDown}
                    />
                </Content>
                <ControlFooter>
                    <CancelButton onClick={handleClickOnCancel}>Abbrechen</CancelButton>
                    <SaveButton onClick={handleClickOnSave}>Speichern</SaveButton>
                </ControlFooter>
            </ModalWrapper>
        </>
    );
}
