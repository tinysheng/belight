import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function LogoWrap() {
  return (
    <SLogoWrap to="/about">
      <Avatar>
        <img
          src="https://free.picui.cn/free/2026/02/20/699834ee30978.jpg"
          alt="avatar"
        />
      </Avatar>
      <Title>目之所极</Title>
      <Sub>simple simple simple</Sub>
    </SLogoWrap>
  );
}

const SLogoWrap = styled(Link)`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "avatar title"
    "avatar sub";
  align-items: center;

  column-gap: 12px;
  padding: 10px 20px;
`;

const Avatar = styled.div`
  grid-area: avatar;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
  }
`;

const Title = styled.p`
  grid-area: title;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Sub = styled.p`
  grid-area: sub;
  padding-bottom: 10px;
  font-size: 14px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
