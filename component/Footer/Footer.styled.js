import styled from "@emotion/styled";

const L = {};

L.Header = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 82px;
    height: 118px;
    margin: 65px 144px 0 59px;
  }

  @media screen and (max-width: 900px) {
    .OurWork {
      margin-right: 49px;
    }

    .AboutUs {
      margin-right: 49px;
    }

    > img {
      margin-right: 55px;
      margin-left: 30px;
    }
    max-width: 375px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

L.Text = styled.div`
  display: flex;
  padding-left: 88px;
  margin-top: 68px;

  @media screen and (max-width: 900px) {
    padding-left: 0;
    padding-left: 20px;
  }

  div > div {
    color: #57777b;
    font-size: 14px;
    line-height: 16.41px;
    padding-top: 68px;
  }
  div > p {
    font-size: 13px;
    line-height: 32px;
    color: #57777b;
  }
`;

export default L;
