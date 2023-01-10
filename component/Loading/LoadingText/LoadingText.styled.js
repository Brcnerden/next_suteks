import styled from "@emotion/styled";

export const LP = {};

LP.Flex = styled.div`
  margin-left: ${(props) => {
    return props.isTurn ? "0" : "132px";
  }};

  margin-right: ${(props) => {
    return props.isTurn ? "132px" : "0";
  }};
  h4 {
    margin-bottom: 34px;
  }
  p {
    width: 538px;
  }
`;
