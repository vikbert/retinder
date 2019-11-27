import React from "react";

export default function CheckedIcon({
                                        width = 25,
                                        height = 25,
                                        fill = "#cf9707",
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
                <g id="Icons" stroke="none" fill="none" fillRule="evenodd">
                    <g id="Rounded" transform="translate(-646.000000, -200.000000)">
                        <g id="Action" transform="translate(100.000000, 100.000000)">
                            <g
                                id="-Round-/-Action-/-check_circle"
                                transform="translate(544.000000, 98.000000)"
                            >
                                <g>
                                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                    <path
                                        d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M9.29,16.29 L5.7,12.7 C5.31,12.31 5.31,11.68 5.7,11.29 C6.09,10.9 6.72,10.9 7.11,11.29 L10,14.17 L16.88,7.29 C17.27,6.9 17.9,6.9 18.29,7.29 C18.68,7.68 18.68,8.31 18.29,8.7 L10.7,16.29 C10.32,16.68 9.68,16.68 9.29,16.29 Z"
                                        id="🔹Icon-Color"
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
