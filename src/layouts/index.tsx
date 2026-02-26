import { useState, useEffect } from "react";
import { Outlet, useMatches } from "react-router-dom";
import styled from "@emotion/styled";

import { createLayoutBlocks } from "./layout.blocks";
import SearchMain from "../components/SearchMain";
import Background from "./Background";

interface RouteHandle {
  title?: string;
  layout?: "board" | "other";
}

export default function Layout() {
  const [mode, setMode] = useState<"board" | "other">("board");
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const matches = useMatches();

  // 动态标题 | 模式切换
  useEffect(() => {
    const last = [...matches]
      .reverse()
      .find((m) => m.handle as RouteHandle | undefined);

    const handle = last?.handle as RouteHandle | undefined;

    if (handle?.title) {
      document.title = `${handle.title} - 目之所极`;
    } else {
      document.title = "目之所极";
    }

    const nextMode = handle?.layout || "board";

    setMode((prev) => {
      if (prev === nextMode) return prev;

      if (!document.startViewTransition) return nextMode;

      document.startViewTransition(() => {
        setMode(nextMode);
      });

      return prev;
    });
  }, [matches]);

  // search 开关
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

  const blocks = createLayoutBlocks({
    onOpenSearch: () => setOpenSearch(true),
  });

  return (
    <LayoutRoot>
      <Background />
      <Board data-mode={mode}>
        {blocks.map(({ slot: Slot, node }, i) => (
          <Slot key={i}>{node}</Slot>
        ))}
        <MainArea>
          <Outlet />
        </MainArea>
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
