import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderTitle from "../../components/HeadTitle";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import NavLinkNote from "../../components/NavLinkNote";
import NavTop from "../../components/NavTop";
import CardNew from "../form/New";

const CardIndex = () => {
  const location = useLocation();
  const [counter, setCounter] = useState(0);
  const [formInvisible, setFormInvisible] = useState(true);
  const { categoryName } = location.state;

  const handleOpenCardForm = () => {
    setCounter(0);
    setFormInvisible(false);
  };

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
        <NavLink
          text="Neue karte"
          position="right"
          handleClick={handleOpenCardForm}
        />
      </NavBottom>
      <CardNew
        categoryId={location.state.categoryId}
        invisible={formInvisible}
        hideForm={() => {
          setFormInvisible(true);
        }}
      />
    </>
  );
};

export default CardIndex;
