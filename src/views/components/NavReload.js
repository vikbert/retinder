import React from "react";
import styled from "styled-components";
import ReloadIcon from "./svg/ReloadIcon";
import Sync from "./Sync";

export default function NavReload() {
    const [syncOpen, setSyncOpen] = React.useState(false);
    const IconWrapper = styled.div`
    cursor: pointer;
  `;

    const closeSync = () => {
        setSyncOpen(false);
    };
    const handleOnClick = () => {
        setSyncOpen(true);
    };
    return (
        <>
            <Sync isOpen={syncOpen} closeSync={closeSync}/>
            <IconWrapper onClick={handleOnClick}>
                <ReloadIcon/>
            </IconWrapper>
        </>
    );
}
