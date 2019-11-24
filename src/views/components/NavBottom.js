import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
`;

export default function NavBottom({ children }) {
  return <Bottom className="bg">{children}</Bottom>;
}
