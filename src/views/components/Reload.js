import React from "react";
import styled from "styled-components";

const TextLeft = styled.div`
  text-align: left;
`;

export default function Reload() {
  return (
    <>
      <TextLeft onClick={() => window.location.reload()}>Reload</TextLeft>
    </>
  );
}
