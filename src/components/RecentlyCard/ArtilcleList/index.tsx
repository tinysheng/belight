import styled from "@emotion/styled";

export default function Articlelist() {
  const articleList = [
    {
      id: 1,
      title: "2026，继续寻找下一块拼图",
      date: "2026-01-01",
    },
    {
      id: 2,
      title: "2026，继续寻找下一块拼图",
      date: "2026-01-01",
    },
    {
      id: 3,
      title: "2026，继续寻找下一块拼图",
      date: "2026-01-01",
    },
  ];

  return (
    <ArticlelistCantainer>
      {articleList.map((item) => (
        <ArticleItem key={item.id}>
          <p className="title">{item.title}</p>
          <p className="date">{item.date}</p>
        </ArticleItem>
      ))}
    </ArticlelistCantainer>
  );
}

const ArticlelistCantainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ArticleItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  padding: 0 3px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    background-color: #33333322;
  }

  .title {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .date {
    font-size: 12px;
    color: #888;
  }
`;
