import styled from "@emotion/styled";

import FONTS from "../../theme/fonts";
import FONT_SIZES from "../../theme/fontSizes";
import COLORS from "../../theme/colors";

const T = {};

T.Text = styled.p`
  color: ${({ textColor }) => COLORS[textColor]};
  ${({ textSize }) => FONT_SIZES[textSize]}
  ${({ textFamily }) => FONTS[textFamily]}
`;

export default T;
