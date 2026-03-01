import styled from "@emotion/styled";
import { useGetPosts } from "@/hooks/useGetPosts";
import Content from "@/components/Content";

export default function Posts() {
  const { articleDetail, loaded } = useGetPosts(1);

  return (
    <Content ></Content>
  );
}
