import Surface from "../components/Surface";

import AlbumBlock from "@/components/blocks/AlbumBlock";
import UserBlock from "@/components/blocks/UserBlock";
import TagCloudBlock from "@/components/blocks/TagCloudBlock";
import RandomBlock from "@/components/blocks/RandomBlock";
import RecentlyBlock from "@/components/blocks/RecentlyBlock";
import SiteTotalBlock from "@/components/blocks/SiteTotalBlock";
import ToolBlock from "@/components/blocks/ToolBlock";
import LinkGroup from "@/components/LinkGroup";

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
          <AlbumBlock />
        </Surface>
      ),
    },

    {
      slot: LeftMiddle,
      node: (
        <Surface enterOrder={1} vtName="user-card">
          <UserBlock onOpenSearch={onOpenSearch} />
        </Surface>
      ),
    },

    {
      slot: LeftBottom,
      node: (
        <Surface enterOrder={2}>
          <TagCloudBlock />
        </Surface>
      ),
    },

    {
      slot: RightTop,
      node: (
        <Surface enterOrder={6}>
          <ToolBlock />
        </Surface>
      ),
    },

    {
      slot: RightMiddle,
      node: (
        <Surface enterOrder={5}>
          <RecentlyBlock />
        </Surface>
      ),
    },

    {
      slot: RightBottom,
      node: (
        <>
          <SiteTotalBlock />
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
          <RandomBlock />
        </Surface>
      ),
    },
  ];
}
