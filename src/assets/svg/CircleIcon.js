import React from "react";

export default function CircleIcon({ width = 25, height = 25, fill = "none" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="#ae8b07"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-circle"
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
}
