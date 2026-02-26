import styled from "@emotion/styled";
import Articlelist from "./ArtilcleList";

export default function RecentlyCard() {
  return (
    <RecentlyCardCantainer>
      <Title>最近更新</Title>
      <Articlelist />
    </RecentlyCardCantainer>
  );
}

const RecentlyCardCantainer = styled.div`
  width: 260px;
  height: 230px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 14px;
`;
