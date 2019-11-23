import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: #f7f7f7;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default function NavBottom({ children }) {
  return <Bottom className="bg">{children}</Bottom>;
}
