import styled from "@emotion/styled";
import LogoWrap from "./LogoWrap";
import SearchButton from "./SearchButton";
import Menu from "./Menu";

interface UserBlockProps {
  onOpenSearch: () => void;
}

export default function UserBlock({ onOpenSearch }: UserBlockProps) {
  return (
    <UserBlockCantainer>
      <LogoWrap />
      <SearchButton onOpenSearch={onOpenSearch} />
      <Menu />
    </UserBlockCantainer>
  );
}

const UserBlockCantainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 40px 1fr;
  width: 260px;
  height: 380px;
  gap: 8px;
`;
