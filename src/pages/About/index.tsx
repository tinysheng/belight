import Loading from "@/components/Loading";
import Content from "../../components/Content";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function About() {
  const { articleDetail, loaded } = useGetPosts(1);

  return (
    <>
      {!loaded ? (
        <Loading />
      ) : (
        <Content header={articleDetail?.title}>
          {articleDetail?.content_html}
        </Content>
      )}
    </>
  );
}
