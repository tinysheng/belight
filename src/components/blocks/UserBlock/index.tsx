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
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 260px;
  height: 380px;
  gap: 10px;
  overflow: hidden;
`;
