import { useGetPosts } from "@/hooks/useGetPosts";
import Content from "@/components/Content";

export default function PostDetail() {
  const { articleDetail, loaded } = useGetPosts(1);

  return (
    <>
      {!loaded ? (
        <>加载中...</>
      ) : (
        // <Content>{articleDetail?.content_html}</Content>
      )}
    </>
  );
}
