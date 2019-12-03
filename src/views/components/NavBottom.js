import React from "react";
import styled from "styled-components";

export default function NavBottom({ children, ...props }) {
  const Bottom = styled.div`
    display: flex;
    justify-content: ${props.spaceEvenly ? `space-evenly` : `space-between`};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
  `;

  return <Bottom>{children}</Bottom>;
}
