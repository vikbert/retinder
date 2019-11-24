import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavTop from "../../components/NavTop";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import HeaderTitle from "../../components/HeadTitle";
import NavLinkNote from "../../components/NavLinkNote";

const CarNew = () => {
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
    </>
  );
};

export default CarNew;
