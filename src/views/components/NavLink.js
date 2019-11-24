import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { primary } from "./Color";

const defaultStyle = css`
  cursor: pointer;
  color: ${primary};
  text-shadow: 0 0.3px 0 rgba(155, 99, 4, 0.892);
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.25px;
  min-width: 33%;
  -webkit-font-smoothing: antialiased;
`;

export default function NavLink({
  text = "",
  position = "center",
  disabled = false,
  handleClick = () => {},
  route = null
}) {
  const TextLeft = styled.div`
    ${defaultStyle}
    text-align: left;
    color: ${props => (disabled ? `#b1aeae` : `#cf9707`)};
  `;

  const TextRight = styled.div`
    ${defaultStyle}
    text-align: right;
    color: ${props => (disabled ? `#b1aeae` : `#cf9707`)};
  `;

  const TextCenter = styled.div`
    ${defaultStyle}
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    text-align: center;
    color: rgb(11, 10, 10);
    text-shadow: none;
  `;

  let TextWithPosition;
  switch (position) {
    case "left":
      TextWithPosition = TextLeft;
      break;
    case "right":
      TextWithPosition = TextRight;
      break;
    default:
      TextWithPosition = TextCenter;
  }

  const delegateClickHandling = () => {
    if (disabled) {
      return;
    }
    handleClick();
  };

  return route ? (
    <Link to={route}>
      <TextWithPosition>{text}</TextWithPosition>
    </Link>
  ) : (
    <TextWithPosition onClick={delegateClickHandling}>{text}</TextWithPosition>
  );
}
