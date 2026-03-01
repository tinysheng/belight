import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Menu() {
  const navList = [
    {
      icon: "-",
      title: "主页",
      path: "/",
    },
    {
      icon: "-",
      title: "文章",
      path: "/articles",
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
  gap: 8px;

  padding: 0 12px;
`;

const MenuItem = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;

  :hover {
    background-color: #33333322;
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
