import React from "react";
import NavTop from "../../components/NavTop";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import HeaderTitle from "../../components/HeadTitle";

const CardIndex = () => (
  <>
    <NavTop>
      <NavLink text="<" position="left" />
      <NavLink text="OrdnerName" position="center" />
      <NavLink text="Bearbeiten" position="right" />
    </NavTop>
    <section className="page-content bg">
      <HeaderTitle title={"Mathematik"} />
    </section>

    <NavBottom>
      <NavLink text="ReviewAll" position="left" />
      <NavLink text="9 Karte" position="center" />
      <NavLink text="Neue karte" position="right" />
    </NavBottom>
  </>
);

export default CardIndex;
