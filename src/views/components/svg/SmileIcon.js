import React from "react";

export default function SuccessIcon({
  width = 50,
  height = 50,
  fill = "#7da922"
}) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Icons"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Outlined" transform="translate(-510.000000, -1306.000000)">
            <g
              id="Communication"
              transform="translate(100.000000, 1162.000000)"
            >
              <g
                id="Outlined-/-Communication-/-sentiment_satisfied_alt"
                transform="translate(408.000000, 142.000000)"
              >
                <g>
                  <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                  <path
                    d="M15.5,11 C14.6715729,11 14,10.3284271 14,9.5 C14,8.67157288 14.6715729,8 15.5,8 C16.3284271,8 17,8.67157288 17,9.5 C17,10.3284271 16.3284271,11 15.5,11 Z M8.5,11 C7.67157288,11 7,10.3284271 7,9.5 C7,8.67157288 7.67157288,8 8.5,8 C9.32842712,8 10,8.67157288 10,9.5 C10,10.3284271 9.32842712,11 8.5,11 Z M12,16 C13.48,16 14.76,15.19 15.45,14 L17.12,14 C16.32,16.05 14.33,17.5 12,17.5 C9.67,17.5 7.68,16.05 6.88,14 L8.55,14 C9.25,15.19 10.52,16 12,16 Z M11.99,2 C17.52,2 22,6.48 22,12 C22,17.52 17.52,22 11.99,22 C6.47,22 2,17.52 2,12 C2,6.48 6.47,2 11.99,2 Z M12,20 C16.42,20 20,16.42 20,12 C20,7.58 16.42,4 12,4 C7.58,4 4,7.58 4,12 C4,16.42 7.58,20 12,20 Z"
                    id="🔹-Icon-Color"
                    fill={fill}
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
