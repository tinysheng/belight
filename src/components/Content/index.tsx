import styled from "@emotion/styled";

import Header from "./Header";
import Main from "./Main";
import Aside from "./Aside";

export default function Content() {
  return (
    <ContentWrapper>
      <Header />
      <Main />
      <Aside />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.section`
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
