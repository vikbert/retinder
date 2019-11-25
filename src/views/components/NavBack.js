import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackIcon from "./svg/BackIcon";

export default function NavBack({ route }) {
  const IconWrapper = styled.div`
    cursor: pointer;
    margin-left: -20px;
  `;

  return (
    <Link to={route}>
      <IconWrapper>
        <BackIcon />
      </IconWrapper>
    </Link>
  );
}
