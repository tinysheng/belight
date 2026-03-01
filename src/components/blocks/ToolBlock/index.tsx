import styled from "@emotion/styled";
import Search from "./Search";
import Menu from "./Menu";
import Clock from "./Clock";

export default function ToolBlock() {
  return (
    <ToolBlockCantainer>
      {/* <Search />
      <Menu /> */}
      {/* <Clock /> */}
      <div>tools</div>
    </ToolBlockCantainer>
  );
}

const ToolBlockCantainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 260px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
