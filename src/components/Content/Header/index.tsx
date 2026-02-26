import styled from "@emotion/styled";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Header</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  grid-area: header;
  display: grid;
  border-radius: var(--radius-md);
  background: #f2f3f4;
`;
