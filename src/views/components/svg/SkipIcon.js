import React from "react";

export default function SkipIcon({
  width = 25,
  height = 25,
  fill = "#ae8b07"
}) {
  return (
    <>
      <svg
        id="i-checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={width}
        fill={fill}
        height={height}
        stroke={fill}
        stroke-width="2"
      >
        <path d="M2 20 L12 28 30 4" />
      </svg>
    </>
  );
}
