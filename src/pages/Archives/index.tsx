import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Archives() {
  return (
    <ArchiveList>
      <ArchiveListItem>
        <ArchiveTitle>
          <em>2025</em>
          <i></i>
          <span>—— 7篇文章</span>
        </ArchiveTitle>
        <ArchiveLink to="/article/1">
          <em>05-28</em>
          <i></i>
          <span>文章标题</span>
          <cite>#日常 #开发</cite>
        </ArchiveLink>
        <ArchiveLink to="/article/1">
          <em>05-28</em>
          <i></i>
          <span>文章标题</span>
          <cite>#日常 #开发</cite>
        </ArchiveLink>
        <ArchiveLink to="/article/1">
          <em>05-28</em>
          <i></i>
          <span>文章标题</span>
          <cite>#日常 #开发</cite>
        </ArchiveLink>
      </ArchiveListItem>
      <ArchiveListItem>
        <ArchiveTitle>
          <em>2024</em>
          <i></i>
          <span>—— 10篇文章</span>
        </ArchiveTitle>
        <ArchiveLink to="/article/1">
          <em>05-28</em>
          <i></i>
          <span>文章标题</span>
          <cite>#日常 #开发</cite>
        </ArchiveLink>
        <ArchiveLink to="/article/1">
          <em>05-28</em>
          <i></i>
          <span>文章标题</span>
          <cite>#日常 #开发</cite>
        </ArchiveLink>
        <ArchiveLink to="/article/1">
          <em>05-28</em>
          <i></i>
          <span>文章标题</span>
          <cite>#日常 #开发</cite>
        </ArchiveLink>
        <ArchiveLink to="/article/1">
          <em>05-28</em>
          <i></i>
          <span>文章标题</span>
          <cite>#日常 #开发</cite>
        </ArchiveLink>
        <ArchiveLink to="/article/1">
          <em>05-28</em>
          <i></i>
          <span>文章标题</span>
          <cite>#日常 #开发</cite>
        </ArchiveLink>
      </ArchiveListItem>
    </ArchiveList>
  );
}

const ArchiveList = styled.section`
  min-height: 100vh;
  padding: 20px 30px;
  border-radius: 3px;
  background: var(--ts-gradient-bg);
`;

const ArchiveListItem = styled.section``;

const ArchiveTitle = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 48px;
  font-size: 26px;

  em {
    width: 60px;
    text-align: right;
    font-weight: 500;
    color: var(--ts-font-color);
  }

  & > i {
    display: block;
    width: 42px;
    height: 42px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--ts-color-ice);
    }
  }

  & > span {
    flex: 1;
    padding-left: 10px;
    font-size: 16px;
    color: var(--ts-color-aqua);
  }
`;

const ArchiveLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 42px;

  em {
    width: 60px;
    text-align: right;
    color: #fffc;
  }

  & > i {
    display: block;
    width: 42px;
    height: 42px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 16px;
      background-color: #c3c3c388;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--ts-color-ice);
    }
  }

  & > span {
    flex: 1;
    color: var(--ts-font-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: #3338;
  }
`;
