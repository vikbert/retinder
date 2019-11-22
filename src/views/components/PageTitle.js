import React from "react";

const titleStyle = {
  color: "###",
  padding: "0 20px",
  fontWeight: "600",
  letterSpacing: "-0.75px",
  fontSize: "1.7rem"
};
export default function PageTitle({ title }) {
  return <h1 style={titleStyle}>{title}</h1>;
}
