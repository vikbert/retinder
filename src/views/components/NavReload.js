import React from "react";
import styled from "styled-components";
import ReloadIcon from "./svg/ReloadIcon";
import ReloadIconAnimation from "./svg/ReloadAnimationIcon";

export default function NavReload() {
    const [clicked, setClicked] = React.useState(false);
    const IconWrapper = styled.div`
    cursor: pointer;
  `;
    const handleOnClick = () => {
        setClicked(!clicked);
        setTimeout(() => {
            window.location.reload();
        }, 970);
    };
    return (
        <IconWrapper onClick={handleOnClick}>
            {clicked ? <ReloadIconAnimation/> : <ReloadIcon/>}
        </IconWrapper>
    );
}
