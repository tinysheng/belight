import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function LogoWrap() {
  return (
    <SLogoWrap>
      <Avatar to="/about">
        <img
          src="https://free.picui.cn/free/2026/02/20/699834ee30978.jpg"
          alt="avatar"
        />
      </Avatar>
      <TitleLink to="/">
        <Title>目之所极</Title>
        <Sub>simple simple simple</Sub>
      </TitleLink>
    </SLogoWrap>
  );
}

const SLogoWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
  width: 100%;
  gap: 10px;
`;

const Avatar = styled(Link)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
  }
`;

const TitleLink = styled(Link)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  gap: 8px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Sub = styled.p`
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
