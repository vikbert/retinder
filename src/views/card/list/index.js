import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import HeaderTitle from "../../components/HeadTitle";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import NavLinkNote from "../../components/NavLinkNote";
import NavTop from "../../components/NavTop";
import CardNew from "../form/New";

const CardIndex = () => {
  const location = useLocation();
  const { categoryName, categoryId } = location.state;
  const categories = useSelector(state => state.categories);
  const cards = useSelector(state => state.cards);
  const currentCategory = categories.byId[categoryId];
  const counter = currentCategory.cards.length === 0;

  const [formInvisible, setFormInvisible] = useState(true);

  const handleOpenCardForm = () => {
    setFormInvisible(false);
  };

  return (
    <>
      <NavTop>
        <NavLink text="❮" position="left" disabled={false} route="/category" />
        {/* todo: show this title, if HeaderTitle not in view ports */}
        <NavLink text={""} position="center" />
        <NavLink text="Bearbeiten" position="right" disabled={counter} />
      </NavTop>
      <section className="page-content bg">
        <HeaderTitle title={categoryName} />
        {categories.byId[categoryId].cards.map((cardId, index) => (
          <div key={index}>{cards.byId[cardId].title}</div>
        ))}
      </section>
      <NavBottom>
        <NavLink text="ReviewAll" position="left" disabled={counter === 0} />
        <NavLinkNote text={counter ? `${counter} Karten` : "Keinen Karten"} />
        <NavLink
          text="Neue karte"
          position="right"
          handleClick={handleOpenCardForm}
        />
      </NavBottom>
      <CardNew
        category={currentCategory}
        invisible={formInvisible}
        hideForm={() => {
          setFormInvisible(true);
        }}
      />
    </>
  );
};

export default CardIndex;
