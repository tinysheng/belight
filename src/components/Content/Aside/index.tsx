import styled from "@emotion/styled";

interface AsideProps {
  children: React.ReactNode;
}

export default function Aside({ children }: AsideProps) {
  return (
    <AsideWrapper>
      <div>{children}</div>
    </AsideWrapper>
  );
}

const AsideWrapper = styled.aside`
  grid-area: aside;
  display: grid;

  > div {
    min-height: 0;
    height: 100px;
    background: #fafbff;
  }
`;
