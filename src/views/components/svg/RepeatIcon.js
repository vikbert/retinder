import React from "react";

export default function RepeatIcon({
  width = 25,
  height = 25,
  fill = "#ae8b07"
}) {
  return (
    <>
      <svg
        id="i-book"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={width}
        height={height}
        fill={fill}
        stroke={fill}
        stroke-width="1"
      >
        <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
      </svg>
    </>
  );
}
