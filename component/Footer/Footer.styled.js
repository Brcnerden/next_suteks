import styled from "@emotion/styled";

const L = {};

L.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 65px 61px 0px 59px;

  @media screen and (max-width: 900px) {
    padding: 49px 20px;
  }

  > img {
    padding-top: 5px;
    width: 82px;
    height: 118px;
  }
`;

L.Text = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    width: 47%;
    display: flex;
    flex-wrap: wrap;
  }

  div > div {
    color: #57777b;
    font-size: 14px;
    line-height: 16.41px;
    @media screen and (max-width: 900px) {
      margin: 32px 20px 32px 49px;
    }
  }
  div > p {
    font-size: 13px;
    line-height: 32px;
    color: #57777b;
    @media screen and (max-width: 900px) {
    }
  }
`;

export default L;
