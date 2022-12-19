import styled from "@emotion/styled";
import COLORS from "../../theme/colors";
import FONT_SIZES from "../../theme/fontSizes";

export const S = {};

S.Slider = styled.div`
  h3 {
    text-align: center;
    ${FONT_SIZES.lm}
    font-weight: 400;
  }

  button {
    width: 189px;
    height: 64px;
    border: none;
    border-radius: 5px;
    background-color: ${COLORS.blue$200};

    ${FONT_SIZES.md}
    text-decoration: underline;
    ${COLORS.black$500}
  }

  @media screen and (max-width: 900px) {
    padding: 40px 20px;
    h3 {
      max-width: 335px;
      font-size: 25px;
      line-height: 40px;
    }
    p {
      padding-left: 80px;
      font-size: 10px;
      line-height: 28px;
    }
  }
`;

S.Name = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 20px;
    display: block;
    width: 92px;
    border-bottom: 1px solid ${COLORS.black$500};
  }
`;
