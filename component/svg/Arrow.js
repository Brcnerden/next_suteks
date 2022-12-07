import * as React from "react";

const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      d="m7 10 8-8M16 1l-5.322 14.737a.45.45 0 0 1-.819 0l-2.865-5.73L1.263 7.14a.45.45 0 0 1 0-.82L16 1Z"
      stroke="#161616"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
