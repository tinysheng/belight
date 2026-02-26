import Surface from "../components/Surface";

import Album from "../components/Album";
import UserCard from "../components/UserCard";
import TagCloud from "../components/TagCloud";
import RandomCard from "../components/RandomCard";
import RecentlyCard from "../components/RecentlyCard";
import SiteTotalCard from "../components/SiteTotalCard";
import ToolBar from "../components/ToolBar";
import LinkGroup from "../components/LinkGroup";

import {
  Top,
  LeftMiddle,
  LeftBottom,
  RightTop,
  RightMiddle,
  RightBottom,
  Bottom,
  LinkArea,
} from "./layout.slots";

export function createLayoutBlocks({
  onOpenSearch,
}: {
  onOpenSearch: () => void;
}) {
  return [
    {
      slot: Top,
      node: (
        <Surface enterOrder={7}>
          <Album />
        </Surface>
      ),
    },

    {
      slot: LeftMiddle,
      node: (
        <Surface enterOrder={1} vtName="user-card">
          <UserCard onOpenSearch={onOpenSearch} />
        </Surface>
      ),
    },

    {
      slot: LeftBottom,
      node: (
        <Surface enterOrder={2}>
          <TagCloud />
        </Surface>
      ),
    },

    {
      slot: RightTop,
      node: (
        <Surface enterOrder={6}>
          <ToolBar />
        </Surface>
      ),
    },

    {
      slot: RightMiddle,
      node: (
        <Surface enterOrder={5}>
          <RecentlyCard />
        </Surface>
      ),
    },

    {
      slot: RightBottom,
      node: (
        <>
          <SiteTotalCard />
          <LinkArea>
            <LinkGroup />
          </LinkArea>
        </>
      ),
    },

    {
      slot: Bottom,
      node: (
        <Surface enterOrder={3}>
          <RandomCard />
        </Surface>
      ),
    },
  ];
}
