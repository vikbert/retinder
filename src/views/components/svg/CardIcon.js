import React from "react";

export default function CardIcon({
  width = 25,
  height = 25,
  fill = "#ae8b07"
}) {
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <g id="Black">
          <g>
            <rect
              x="0.5"
              y="4.5"
              fill="none"
              stroke={fill}
              width="22"
              height="16"
            />

            <rect
              x="3.5"
              y="7.5"
              fill="none"
              stroke={fill}
              width="3"
              height="4"
            />

            <line
              fill="none"
              stroke={fill}
              x1="3.5"
              y1="15.5"
              x2="5.5"
              y2="15.5"
            />

            <line
              fill="none"
              stroke={fill}
              x1="7.5"
              y1="15.5"
              x2="11.5"
              y2="15.5"
            />

            <line
              fill="none"
              stroke={fill}
              x1="4.5"
              y1="17.5"
              x2="3.5"
              y2="17.5"
            />

            <line
              fill="none"
              stroke={fill}
              x1="9.5"
              y1="17.5"
              x2="6.5"
              y2="17.5"
            />
            <polygon
              fill="none"
              stroke={fill}
              points="20.5,16.5 
			18.5,14.5 17,16 15.5,14.5 13.5,16.5 15.5,18.5 17,17 18.5,18.5 		"
            />
          </g>
        </g>
        <g id="Frames-24px">
          <rect fill="none" width="24" height="24" />
        </g>
      </svg>
    </>
  );
}
