import React from "react";
export default function ReloadIcon({
  width = 25,
  heigth = 25,
  fill = "#ae8b07"
}) {
  return (
    <>
      <svg
        width={width}
        height={heigth}
        viewBox="0 0 100 100"
        version="1.1"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="4.-To-refresh" stroke="none" stroke-width="1" fill="none">
          <g
            transform="translate(0.000000, 8.000000)"
            stroke={fill}
            stroke-width="4"
          >
            <path
              d="M89,40 C89,17.90861 71.09139,0 49,0 C34.1239759,0 21.1446258,8.12062657 14.2530697,20.1707596"
              id="Layer-1"
            ></path>
            <polyline
              id="Layer-2"
              transform="translate(89.000000, 37.000000) scale(1, -1) rotate(11.000000) translate(-89.000000, -37.000000) "
              points="79 42 89 32 99 42"
            ></polyline>
            <path
              d="M91,84 C91,61.90861 73.09139,44 51,44 C36.1239759,44 23.1446258,52.1206266 16.2530697,64.1707596"
              id="Layer-3"
              transform="translate(51.000000, 64.000000) scale(-1, -1) translate(-51.000000, -64.000000) "
            ></path>
            <polyline
              id="Layer-4"
              transform="translate(11.000000, 47.000000) scale(-1, 1) rotate(11.000000) translate(-11.000000, -47.000000) "
              points="1 52 11 42 21 52"
            ></polyline>
          </g>
        </g>
      </svg>
    </>
  );
}
