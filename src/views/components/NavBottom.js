import React from "react";
import styled from "styled-components";

export default function NavBottom({ children, ...props }) {
  const Bottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
  `;

  console.log(props);
  return <Bottom className="bg">{children}</Bottom>;
}
