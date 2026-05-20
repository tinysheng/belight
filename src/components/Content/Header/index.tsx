import styled from "@emotion/styled";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>{children}</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 0 32px;
  border-radius: var(--radius-md);
  background: #f2f3f4;

  h1 {
    font-size: 28px;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.3;
  }
`;
