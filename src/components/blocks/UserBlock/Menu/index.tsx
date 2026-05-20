import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const navList = [
    {
      icon: "-",
      title: "文章",
      path: "/articles",
    },
    {
      icon: "-",
      title: "动态",
      path: "/dynamic",
    },
    {
      icon: "-",
      title: "友链",
      path: "/friends",
    },
    {
      icon: "-",
      title: "归档",
      path: "/archives",
    },
  ];

  return (
    <MenuCantainer>
      {navList.map((item) => (
        <MenuItem to={item.path} key={item.title}>
          <i className="iconfont icon-xiangyou">
            {/* <img src="" alt="" /> */}
            {item.icon}
          </i>
          <span>{item.title}</span>
        </MenuItem>
      ))}
    </MenuCantainer>
  );
}

const MenuCantainer = styled.menu`
  display: grid;
  align-content: start;
  grid-template-columns: 1fr;
  
  width: 100%;
  padding: 0 12px;
  gap: 8px;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  border-radius: 3px;

  :hover {
    background-color: #33333322;
  }

  &.active {
    background-color: #33333344;
    color: #000;
    font-weight: bold;
  }

  > i {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    font-style: normal;
    font-size: 20px;
  }

  > span {
    width: 100%;
    font-size: 16px;
    color: #333;
  }
`;
