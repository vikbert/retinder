import React from "react";

export default function ReloadIcon({
  width = 25,
  heigth = 25,
  fill = "#cf9607"
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={heigth}
        viewBox="0 0 100 100"
      >
        <g transform="matrix(1,0,0,1,0,0)">
          <path
            d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
            fill="none"
            stroke={fill}
            strokeWidth="5"
          ></path>

          <path d="M49 3L49 27L61 15L49 3" fill={fill}></path>
        </g>
      </svg>
    </>
  );
}
