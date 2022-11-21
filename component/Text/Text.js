import React from "react";

import T from "./Text.styles";

const Text = ({
  textColor = "black$500",
  fontFamily = "Ogg-Regular",
  size = "md",
  children,
  ...props
}) => {
  return (
    <T.Text
      textFamily={fontFamily}
      textColor={textColor}
      textSize={size}
      {...props}
    >
      {children}
    </T.Text>
  );
};

export default Text;
