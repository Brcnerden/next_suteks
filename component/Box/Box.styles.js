import styled from "@emotion/styled";
import COLORS from "../../theme/colors";

export const B = {};
B.Box = styled.div`
  position: relative;
  width: 100%;
  padding: 57px 172px 64px 172px;
  display: flex;
  justify-content: space-around;
  background-color: ${COLORS.gray$100};
`;

B.BoxText = styled.div`
  @media screen and (max-width: 900px) {
    max-width: 375px;
    width: 100%;
    height: 456px;
  }

  @media screen and (max-width: 900px) {
    padding: 5px 20px 29px 20px;
    height: 280px;

    button {
      margin: -39px 51px 20px 48px;
    }
  }
`;
B.ArrowsR = styled.div`
  position: absolute;
  top: 211px;
  right: 50px;

  @media screen and (max-width: 900px) {
  }
`;

B.ArrowsL = styled.div`
  position: absolute;
  top: 211px;
  left: 50px;
`;
