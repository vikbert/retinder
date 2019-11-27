import React from "react";
import styled from "styled-components";

const TextNote = styled.div`
  text-align: center;
  font-size: 12px;
  text-align: center;
  color: rgb(11, 10, 10);
`;
export default function NavLinkNote({text}) {
    return <TextNote>{text}</TextNote>;
}
