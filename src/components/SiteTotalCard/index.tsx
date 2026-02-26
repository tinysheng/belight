import styled from "@emotion/styled";
import Surface from "../Surface";

export default function SiteTotalCard() {
  const articlesLoaded = true;
  const articleTotal = 100;
  const categoryTotal = 10;
  const tagTotal = 100;

  return (
    <SiteTotalContainer enterOrder={4}>
      <Title>站点统计</Title>
      <Statistics>
        <div>
          <span>{articlesLoaded ? articleTotal : "-"}</span>
          <p>文章</p>
        </div>
        <div>
          <span>{articlesLoaded ? categoryTotal : "-"}</span>
          <p>分类</p>
        </div>
        <div>
          <span>{articlesLoaded ? tagTotal : "-"}</span>
          <p>标签</p>
        </div>
      </Statistics>
    </SiteTotalContainer>
  );
}

const SiteTotalContainer = styled(Surface)`
  width: 260px;
  height: 80px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 14px;
`;

const Statistics = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  width: 100%;
  height: 60px;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    & > span {
      font-size: 14px;
    }
  }
`;
