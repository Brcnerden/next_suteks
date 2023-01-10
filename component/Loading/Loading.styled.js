import styled from "@emotion/styled";
import COLORS from "../../theme/colors";

const P = {};

P.LoadingHead = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 283px;
  h2 {
    padding-top: 152px;
    padding-bottom: 38px;
  }
  p {
    margin-bottom: 102px;
  }
`;
P.flex = styled.div`
  display: flex;
  width: 50%;
  margin: 102px 172px;

  button {
    background-color: ${COLORS.blue$200};
    border-radius: 5px;
    width: 200px;
    height: 64px;
    margin-top: 39px;
  }
`;

export default P;
