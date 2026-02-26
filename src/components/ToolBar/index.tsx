import styled from "@emotion/styled";
import Search from "./Search";
import Menu from "./Menu";
import Clock from "./Clock";


export default function ToolBar() {
  return (
    <SToolBar>
      {/* <Search />
      <Menu /> */}
      {/* <Clock /> */}
      <div>
        tools
      </div>
    </SToolBar>
  );
}

const SToolBar = styled.div`
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
