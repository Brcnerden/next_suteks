import styled from "@emotion/styled";
import COLORS from "../../theme/colors";
import FONT_SIZES from "../../theme/fontSizes";

export const S = {};

S.Slider = styled.div`
  padding: 57px 172px 64px 172px;

  h3 {
    text-align: center;
    ${FONT_SIZES.lm}
    font-weight: 400;
    margin-bottom: 52px;
  }

  button {
    width: 189px;
    height: 64px;
    border: none;
    border-radius: 5px;
    background-color: ${COLORS.blue$200};
    margin-top: 47px;
    ${FONT_SIZES.md}
    text-decoration: underline;
    ${COLORS.black$500}
  }

  @media screen and (max-width: 900px) {
    padding: 40px 20px 48px 20px;

    button {
      margin-right: 120px;
    }

    h3 {
      ${FONT_SIZES.mdlx}
    }
    p {
      padding-right: 21px;
      font-size: 18px;
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
    @media screen and (max-width: 900px) {
      width: 39px;
    }
  }
`;
