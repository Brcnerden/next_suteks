import styled from "@emotion/styled";
import COLORS from "../../theme/colors";
import FONTS from "../../theme/fonts";
import FONT_SIZES from "../../theme/fontSizes";

export const H = {};

H.Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 60px 0 60px;

  @media screen and (max-width: 900px) {
    padding: 40px 20px;
  }
  > div {
    z-index: 90;
    @media screen and (max-width: 900px) {
      padding: 195px 57px 108px 57px;
      position: fixed;
      margin: 0;
      top: 0;
      left: 100%;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: ${COLORS.white};
      > span {
        ${FONTS.avertaRegular}
        ${FONT_SIZES.md}
        ${COLORS.black$500}
      }
      transform: translate3d(
        ${({ isMenuOpen }) => (isMenuOpen ? "-100%" : 0)},
        0,
        0
      );
    }
  }

  > img {
    width: 88px;
    height: 129px;
    z-index: 100;
    @media screen and (max-width: 900px) {
      width: 55px;
      height: 80px;
    }
  }
  div > ul {
    display: flex;
    color: #57777b;
    ${FONTS.avertaRegular};
    ${FONT_SIZES.xs}
    line-height: 24px;
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      line-height: 70px;
    }
  }

  li {
    padding-left: 48px;
    list-style-type: none;
    @media screen and (max-width: 1160px) {
      padding-left: 25px;
    }
    @media screen and (max-width: 900px) {
      ${FONTS.oggRegular};
      ${FONT_SIZES.l}
      line-height: 70px;
    }
  }
`;

H.Footer = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    span {
      margin-right: 16px;
      ${FONTS.avertaRegular};
    }
  }
`;

H.Button = styled.button`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    z-index: 100;
    width: 44px;
    height: 44px;
  } ;
`;
