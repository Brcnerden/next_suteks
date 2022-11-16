import styled from "@emotion/styled";

const L = {};

L.Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 88px;

  > img {
    width: 82px;
    height: 118px;
    margin-right: 144px;
  }
`;

L.Text = styled.div`
  display: flex;
  padding-left: 88px;
  div > div {
    color: #57777b;
    font-size: 14px;
    line-height: 16.41px;
  }
  div > p {
    font-size: 13px;
    line-height: 32px;
    color: #57777b;
  }
`;

export default L;
