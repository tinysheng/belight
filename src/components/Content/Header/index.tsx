import styled from "@emotion/styled";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({children}: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>{children}</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  grid-area: header;
  display: grid;
  border-radius: var(--radius-md);
  background: #f2f3f4;
`;
