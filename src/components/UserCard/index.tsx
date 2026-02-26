import styled from "@emotion/styled";
import LogoWrap from "./LogoWrap";
import SearchButton from "./SearchButton";
import Menu from "./Menu";

interface UserCardProps {
  onOpenSearch: () => void;
}

export default function UserCard({ onOpenSearch }: UserCardProps) {
  return (
    <UserCardCantainer>
      <LogoWrap />
      <SearchButton onOpenSearch={onOpenSearch} />
      <Menu />
    </UserCardCantainer>
  );
}

const UserCardCantainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 40px 1fr;
  width: 260px;
  height: 380px;
  gap: 8px;
`;
