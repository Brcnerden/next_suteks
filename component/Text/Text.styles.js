import styled from "@emotion/styled";

import { FONTS, FONTS_SIZES } from "theme/fonts";
import COLORS from "theme/colors";

const T = {};

T.Text = styled.p`
  color: ${({ textColor }) => COLORS[textColor]};
  ${({ textSize }) => FONTS_SIZES[textSize]}
  ${({ textFamily }) => FONTS[textFamily]}
`;

export default T;
