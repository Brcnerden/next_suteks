import * as React from "react";

const ArrowSlider = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={23}
    fill="none"
    {...props}
  >
    <path
      d="M24 11.5H2M12 1 1 11.5 12 22"
      stroke="#57777B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowSlider;
