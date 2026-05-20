import styled from "@emotion/styled";
import { useGetArticles } from "@/hooks/useGetArticles";

export default function Articles() {
  const { articles, loaded } = useGetArticles();

  console.log('articles', articles)
  return (
    <>
      {loaded && (
        <ArticleList>
          {articles.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
            </li>
          ))}
        </ArticleList>
      )}
    </>
  );
}

const ArticleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
