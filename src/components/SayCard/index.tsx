import React from "react";
import styled from "@emotion/styled";

interface StatusProps {
  status: {
    id: string;
    user: {
      avatar: string;
      name: string;
    };
    createdAt: string;
    content: string;
    link?: string;
    deviceInfo?: string;
  };
}

const StatusCard: React.FC<StatusProps> = ({ status }) => {
  return (
    <Card>
      <Header>
        <Avatar>
          <img src={status.user.avatar} alt={status.user.name} />
        </Avatar>
        <UserInfo>
          <UserName>{status.user.name}</UserName>
          <Time>{status.createdAt}</Time>
        </UserInfo>
      </Header>

      <Content>
        <Text>{status.content}</Text>
        {status.link && (
          <Link href={status.link} target="_blank" rel="noreferrer">
            {status.link}
          </Link>
        )}
      </Content>

      {status.deviceInfo && <Footer>{status.deviceInfo}</Footer>}
    </Card>
  );
};

export default StatusCard;

const Card = styled.div`
  background: var(--ts-gradient-bg);
  border-radius: 4px;
  padding: 16px;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 12px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: #fcfcfc;
`;

const Time = styled.span`
  font-size: 0.85rem;
  color: #999;
  margin-top: 2px;
`;

const Content = styled.div`
  margin-top: 8px;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
`;

const Link = styled.a`
  display: inline-block;
  margin-top: 8px;
  background: #f0f3fa;
  color: #0e59ff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.95rem;
  word-break: break-all;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  font-size: 0.85rem;
  color: #666;
  gap: 8px;
  svg {
    width: 14px;
    height: 14px;
    color: #999;
  }
`;
