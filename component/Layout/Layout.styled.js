import styled from "@emotion/styled";
import COLORS from "../../theme/colors";
import { css } from "@emotion/react";

const L = {};

L.div = styled.div`
  background-color: ${COLORS.white};
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      overflow: hidden;
      height: 100%;
    `}
`;

export default L;
