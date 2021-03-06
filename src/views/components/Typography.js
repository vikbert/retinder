import styled, {css} from "styled-components";

const fontWeight = css`
  font-weight: 700;
`;

export const H1 = styled.h1`
  font-size: 1.8rem;
  letter-spacing: -0.55px;
  ${fontWeight}
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  ${fontWeight}
`;

export const H3 = styled.h3`
  font-size: 1.17rem;
  ${fontWeight}
`;

export const H4 = styled.h4`
  font-size: 1.33rem;
  ${fontWeight}
`;

export const H5 = styled.h5`
  font-size: 1rem;
  ${fontWeight}
`;

export const Caption = styled.span`
  font-size: 12px;
`;
