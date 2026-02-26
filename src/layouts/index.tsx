import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

// ui
import Surface from "../components/Surface";
import Background from "./Background";

// 组件
import Album from "../components/Album";
import UserCard from "../components/UserCard";
import TagCloud from "../components/TagCloud";
import RandomCard from "../components/RandomCard";
import RecentlyCard from "../components/RecentlyCard";
import SiteTotalCard from "../components/SiteTotalCard";
import ToolBar from "../components/ToolBar";
import LinkGroup from "../components/LinkGroup";
import SearchMain from "../components/SearchMain";

export default function Layout() {
  const [mode, setMode] = useState<"board" | "other">("board");
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const firstMount = useRef(true);

  useEffect(() => {
    const next = isHomePage ? "board" : "other";

    if (firstMount.current) {
      firstMount.current = false;
      setMode(next);
      return;
    }

    if (!document.startViewTransition) {
      setMode(next);
      return;
    }

    document.startViewTransition(() => {
      setMode(next);
    });
  }, [isHomePage]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;

      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable)
        return;

      const isCmdOrCtrl = e.metaKey || e.ctrlKey;

      if (isCmdOrCtrl && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpenSearch((prev) => !prev);
        return;
      }

      if (e.key === "Escape") {
        setOpenSearch(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <LayoutRoot>
      <Background />
      <Board data-mode={mode}>
        <Top>
          <Surface enterOrder={7}>
            <Album />
          </Surface>
        </Top>

        <LeftMiddle>
          <Surface enterOrder={1} vtName="user-card">
            <UserCard onOpenSearch={() => setOpenSearch(true)} />
          </Surface>
        </LeftMiddle>

        <LeftBottom>
          <Surface enterOrder={2}>
            <TagCloud />
          </Surface>
        </LeftBottom>

        <MainArea>
          <Outlet />
        </MainArea>

        <RightTop>
          <Surface enterOrder={6}>
            <ToolBar />
          </Surface>
        </RightTop>

        <RightMiddle>
          <Surface enterOrder={5}>
            <RecentlyCard />
          </Surface>
        </RightMiddle>

        <RightBottom>
          <SiteTotalCard />
          <LinkArea>
            <LinkGroup />
          </LinkArea>
        </RightBottom>

        <Bottom>
          <Surface enterOrder={3}>
            <RandomCard />
          </Surface>
        </Bottom>
      </Board>
      {openSearch && <SearchMain onCloseSearch={() => setOpenSearch(false)} />}
    </LayoutRoot>
  );
}

const LayoutRoot = styled.section`
  position: relative;
  min-height: 100svh;
  overflow: hidden;
`;

const Board = styled.main`
  min-height: 100vh;
  padding: 48px;
  display: grid;
  gap: 50px;

  &[data-mode="board"] {
    grid-template-columns: 1fr 360px 1fr;
    grid-template-rows: 1fr 280px 1fr;
    grid-template-areas:
      "l1    top      r1"
      "l1    main     r2"
      "l2    bottom   r3";
  }

  &[data-mode="other"] {
    min-height: auto;
    align-items: start;
    grid-template-columns: 1fr 280px minmax(0, 900px) 1fr;
    grid-template-rows: auto;
    grid-template-areas: ".  l1  main  .";
    gap: 24px;
  }
`;

const MainArea = styled.section`
  grid-area: main;
  min-width: 0;
  min-height: 0;

  [data-mode="other"] & {
    overflow: auto;
  }
`;

const Top = styled.section`
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;

  [data-mode="other"] & {
    display: none;
  }
`;

const LeftMiddle = styled.aside`
  grid-area: l1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 20px;

  [data-mode="other"] & {
    padding-right: 0;
  }
`;

const LeftBottom = styled.aside`
  grid-area: l2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  [data-mode="other"] & {
    display: none;
  }
`;

const RightTop = styled.aside`
  grid-area: r1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  [data-mode="other"] & {
    display: none;
  }
`;

const RightMiddle = styled.aside`
  grid-area: r2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;

  [data-mode="other"] & {
    display: none;
  }
`;

const RightBottom = styled.section`
  grid-area: r3;
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
  align-items: flex-start;
  gap: 20px;

  [data-mode="other"] & {
    display: none;
  }
`;

const Bottom = styled.section`
  grid-area: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;

  [data-mode="other"] & {
    display: none;
  }
`;

const LinkArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
