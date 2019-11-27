import React from "react";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {primary} from "./Style";

const defaultStyle = css`
  cursor: pointer;
  color: ${primary};
  text-shadow: 0 0.3px 0 rgba(155, 99, 4, 0.892);
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.25px;
  min-width: 33%;
  -webkit-font-smoothing: antialiased;
`;
const StyledDiv = styled.div`
  font-size: 17px;
  padding: 2px 0 0 10px;
`;
export default function NavLink
    ({
         text,
         position,
         title,
         disabled = false,
         isBack = false,
         handleClick = () => {
         },
         route = null,
     }) {
    
    const TextLeft = styled.div`
    ${defaultStyle}
    text-align: left;
    color: ${props => (disabled ? `#b1aeae` : `#cf9707`)};
    margin-left: ${isBack ? `-10px` : `0`};
    font-size: ${isBack ? `30px` : `17px`};
    display: flex;
  `;

    const TextRight = styled.div`
    ${defaultStyle}
    text-align: right;
    color: ${props => (disabled ? `#b1aeae` : `#cf9707`)};
  `;

    const TextCenter = styled.div`
    ${defaultStyle}
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    text-align: center;
    color: rgb(11, 10, 10);
    text-shadow: none;
  `;

    let TextWithAlignment;
    switch (position) {
        case "left":
            TextWithAlignment = TextLeft;
            break;
        case "right":
            TextWithAlignment = TextRight;
            break;
        default:
            TextWithAlignment = TextCenter;
    }

    const delegateClickHandling = () => {
        if (disabled) {
            return;
        }
        handleClick();
    };

    if (route) {
        return (
            <Link to={route}>
                <TextWithAlignment>{text}</TextWithAlignment>
            </Link>
        );
    }

    return (
        <TextWithAlignment onClick={delegateClickHandling}>
            {text} {isBack && <StyledDiv>{title}</StyledDiv>}
        </TextWithAlignment>
    );
}
