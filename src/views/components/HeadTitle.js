import React from "react";
import styled from "styled-components";
import { H1 } from "./Typography";

const Title = styled.div`
  padding: 5px 10px;
`;
export default function HeaderTitle({ title = "HeaderTitle" }) {
  return (
    <Title>
      <H1>{title}</H1>
    </Title>
  );
}
