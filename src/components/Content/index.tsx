/* import styled from "@emotion/styled";

import Header from "./Header";
import Body from "./Body";
import Aside from "./Aside";

export default function Content(header, aside, children) {
  return (
    <ContentRoot>
      {header && <Header>{header}</Header>}
      {children && <Body>{children}</Body>}
      {aside && <Aside>{aside}</Aside>}
    </ContentRoot>
  );
}

const ContentRoot = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(0, 300px);
  grid-template-rows: 160px 1fr;
  grid-template-areas:
    "header aside"
    "main aside";
  gap: 20px;

  animation: contentFadeIn 0.3s ease-in-out;

  @keyframes contentFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
 */

import styled from "@emotion/styled";

import Header from "./Header";
import Body from "./Body";
import Aside from "./Aside";

interface ContentProps {
  header: React.ReactNode,
  children: React.ReactNode
}

export default function Content({header, children} : ContentProps) {
  return (
    <ContentRoot>
      <Header>{header}</Header>
      <Body>{children}</Body>
      <Aside>目录</Aside>
    </ContentRoot>
  )
}


const ContentRoot = styled.section`
  display: grid;
  grid-template-columns: 1fr 260px;
  grid-template-rows: 160px auto;
  grid-template-areas:
    "header aside"
    "main aside";
  gap: 20px;
  height: 100%;

  animation: contentFadeIn 0.3s ease-in-out;

  @keyframes contentFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;