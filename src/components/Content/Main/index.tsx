import styled from "@emotion/styled";

export default function Main() {
  return (
    <MainContainer>
      <h2>Main</h2>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  grid-area: main;
  display: grid;
  border-radius: var(--radius-md);
  background: #fafbff;
  height: 600px;
`;
