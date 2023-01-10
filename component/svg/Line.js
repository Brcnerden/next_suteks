import * as React from "react";

const Line = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1}
    fill="none"
    {...props}
  >
    <path stroke="#E9E9E9" d="M0 .5h1440" />
  </svg>
);

export default Line;
