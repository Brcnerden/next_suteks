import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const A = {};

A.Button = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 50px;
  z-index: 10;
  ${({ isNext }) =>
    isNext &&
    css`
      right: 10px;
      left: auto;
    `}
  @media screen and (max-width: 900px) {
    bottom: 82px;
    top: 466px;
    left: 220px;

    ${({ isNext }) =>
      isNext &&
      css`
        right: 10px;
      `}
  }
`;
