import styled from "@emotion/styled";

export default function RandomCard() {
  return (
    <RandomCardContainer>
      <Title>随机推荐</Title>
      <Content>
        <p className="text-title">Card title</p>
        <p className="text-body">随机文章是指在文章集合中随机选择的一篇文章。随机文章可以用于多种目的，例如在博客或网站上展示随机的内容，或者在文章集合中随机选择一篇文章进行阅读。</p>
      </Content>
    </RandomCardContainer>
  );
}

const RandomCardContainer = styled.div`
  width: 240px;
  height: 200px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 14px;
`;

const Content = styled.div`
  overflow: hidden;

  .text-body {
    color: rgb(134, 134, 134);
  }

  .text-title {
    font-size: 1.5em;
    font-weight: bold;
  }
`;
