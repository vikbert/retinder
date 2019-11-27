import React from "react";

export default function CircleIcon({width = 25, height = 25, fill = "none"}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#ae8b07"
            className="feather feather-circle"
        >
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
    );
}
