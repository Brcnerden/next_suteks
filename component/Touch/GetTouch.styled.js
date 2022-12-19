import styled from "@emotion/styled";
import COLORS from "../../theme/colors";
import FONT_SIZES from "../../theme/fontSizes";

export const G = {};

G.Touch = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  > p {
    margin-top: 48px;
    margin-bottom: 55px;
  }
  button {
    ${FONT_SIZES.md}
    width: 228px;
    height: 72px;
    background-color: ${COLORS.blue$200};
    border-radius: 5px;
    border: none;
    text-decoration: underline;
  }

  @media screen and (max-width: 900px) {
    h3 {
      ${FONT_SIZES.l}
    }

    p {
      ${FONT_SIZES.md}
    }
  }
`;

G.Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 16px;
  }
`;
