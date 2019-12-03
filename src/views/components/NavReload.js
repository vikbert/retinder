import React from "react";
import styled from "styled-components";
import SettingIcon from "./svg/SettingIcon";
import Sidebar from "./Sidebar";

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
      <Sidebar isOpen={syncOpen} closeSync={closeSync} />
      <IconWrapper onClick={handleOnClick}>
        <SettingIcon />
      </IconWrapper>
    </>
  );
}
