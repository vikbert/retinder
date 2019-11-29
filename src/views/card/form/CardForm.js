import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { disabled, primary } from "../../components/Style";
import NavLink from "../../components/NavLink";
import NavTop from "../../components/NavTop";
import { createCard } from "../cardWidget";
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
  padding: 10px 20px;
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
  category,
  formVisible = false,
  hideForm = null
}) {
  const dispatch = useDispatch();

  const handleSubmitForm = event => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const descriptionContent = formData.get("description").trim();

    if (descriptionContent.length === 0) {
      return false;
    }

    dispatch(
      createCard({
        id: uuid(),
        title: "",
        description: descriptionContent,
        category: (category && category.id) || null
      })
    );

    formElement.reset();
    hideForm();
  };

  return (
    formVisible && (
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
                  placeholder="Kontent von Karte eingeben"
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
