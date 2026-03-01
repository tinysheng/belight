import { useState, useEffect, useMemo, useRef } from "react";
import { Outlet, useMatches } from "react-router-dom";
import styled from "@emotion/styled";

import { useSearchHotkey } from "@/hooks/useSearchhotkey";

import { createLayoutBlocks } from "./layout.blocks";
import SearchMain from "../components/SearchMain";
import Background from "./Background";

interface RouteHandle {
  title?: string;
  layout?: "board" | "other";
}

export default function Layout() {
  const matches = useMatches();
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  useSearchHotkey(setOpenSearch);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const blocks = createLayoutBlocks({
    onOpenSearch: () => setOpenSearch(true),
  });

  const routeHandle = useMemo(() => {
    const last = [...matches]
      .reverse()
      .find((m) => m.handle as RouteHandle | undefined);
    return last?.handle as RouteHandle | undefined;
  }, [matches]);

  const mode = routeHandle?.layout ?? "board";
  const pageTitle = routeHandle?.title
    ? `${routeHandle.title} - 目之所极`
    : "目之所极";

  // 动态标题
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  // 搜索框聚焦
  useEffect(() => {
    if (!openSearch) return;
    searchInputRef.current?.focus();
  }, [openSearch]);

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
      {openSearch && (
        <SearchMain
          searchInputRef={searchInputRef}
          onCloseSearch={() => setOpenSearch(false)}
        />
      )}
    </LayoutRoot>
  );
}

const LayoutRoot = styled.section`
  height: 100%;
`;

const Board = styled.main`
  display: grid;

  &[data-mode="board"] {
    grid-template-columns: 1fr 360px 1fr;
    grid-template-rows: 1fr 280px 1fr;
    grid-template-areas:
      "l1    top      r1"
      "l1    main     r2"
      "l2    bottom   r3";
    gap: 50px;
    min-height: 100vh;
  }

  &[data-mode="other"] {
    align-items: start;
    grid-template-columns: 1fr 280px minmax(0, 1020px) 1fr;
    grid-template-rows: 20px auto;
    grid-template-areas:
      ".  .  main  ."
      ".  l1  main  .";
    gap: 24px;
    height: 100%;
  }
`;

const MainArea = styled.section`
  grid-area: main;
  min-width: 0;
  min-height: 0;
  height: 100%;
`;
