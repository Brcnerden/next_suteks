import styled from "@emotion/styled";

export const H = {};

H.Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 60px 0 60px;

  > img {
    width: 88px;
    height: 129px;
  }
  > ul {
    display: flex;
    color: #57777b;
    font-family: Averta-Regular;
    font-size: 16px;
    line-height: 24px;
  }
  li {
    padding-left: 48px;
    list-style-type: none;
  }
`;
