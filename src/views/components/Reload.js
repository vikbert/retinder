import React from "react";
import styled from "styled-components";
import ReloadIcon from "./svg/ReloadIcon";

export default function Reload() {
  const [rotation, setRotation] = React.useState(false);
  const IconWrapper = styled.div`
    cursor: pointer;
    -webkit-transition-duration: 1s;
    -moz-transition-duration: 1s;
    -o-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    transition-property: transform;
    transform: ${props => (rotation ? `rotate(360deg)` : `none`)};
  `;
  const handleOnClick = () => {
    setRotation(true);
    window.location.reload();
  };
  return (
    <IconWrapper onClick={handleOnClick}>
      <ReloadIcon />
    </IconWrapper>
  );
}
