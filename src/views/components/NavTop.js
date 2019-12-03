import React from "react";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
`;

export default function NavTop({ children }) {
  return <Top className="bg">{children}</Top>;
}
