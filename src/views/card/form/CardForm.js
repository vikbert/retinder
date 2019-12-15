import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { primary } from "../../components/Style";
import NavLink from "../../components/NavLink";
import NavTop from "../../components/NavTop";
import { createCard, updateCard } from "../cardWidget";
import { uuid } from "../../../utils/UUID";

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
const ContentContainer = styled.div`
  padding: 10px 30px;
`;

const TextContent = styled.textarea`
  ${inputWithoutBorder}
  height: 40vh;
`;

const ButtonWithoutStyle = styled.button`
  padding: 0;
  border: none;
  background: none;
`;

export default function CardForm({
  category = null,
  formVisible = false,
  hideForm = null,
  card = null
}) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmitForm = event => {
    event.preventDefault();
    const descriptionContent = text.trim();

    if (descriptionContent.length === 0) {
      return false;
    }

    const firstLine = descriptionContent.split("\n")[0].slice(0, 30);
    const cardData = {
      id: card ? card.id : uuid(),
      title: firstLine,
      ranking: 100,
      description: descriptionContent,
      category: (category && category.id) || null
    };

    if (card) {
      dispatch(updateCard(cardData));
    } else {
      dispatch(createCard(cardData));
    }

    setText("");
    hideForm();
  };

  const handleOnChange = event => {
    setText(event.target.value);
  };

  useEffect(() => {
    setText(card ? card.description : "");
  }, [card]);

  return (
    formVisible &&
    category && (
      <>
        <FullscreenModal>
          <form onSubmit={handleSubmitForm}>
            <NavTop>
              <NavLink
                text="❮"
                title={
                  category.name.length > 18
                    ? category.name.slice(0, 15) + "..."
                    : category.name
                }
                position="left"
                isBack={true}
                handleClick={hideForm}
              />
              <NavLink text="" position="center" />
              <ButtonWithoutStyle type="submit">
                <NavLink text="Fertig" position="right" />
              </ButtonWithoutStyle>
            </NavTop>
            <div className="page-content bg">
              <ContentContainer>
                <TextContent
                  autoFocus
                  name="description"
                  value={text}
                  onChange={handleOnChange}
                  required
                />
              </ContentContainer>
            </div>
          </form>
        </FullscreenModal>
      </>
    )
  );
}
