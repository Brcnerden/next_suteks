import styled from "@emotion/styled";
import COLORS from "../../theme/colors";

export const B = {};

B.Box = styled.div`
  width: 100%;
  height: 456px;
  background-color: ${COLORS.gray$100};

  span {
    border: solid 1px #161616;
    width: 92px;
  }
  p {
    padding-top: 10px;
  }
`;

B.BoxText = styled.div`
  padding: 20px 40px;
`;
