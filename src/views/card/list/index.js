import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavTop from "../../components/NavTop";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import HeaderTitle from "../../components/HeadTitle";
import NavLinkNote from "../../components/NavLinkNote";

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
        <NavLink text={categoryName} position="center" />
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

export default CardIndex;
