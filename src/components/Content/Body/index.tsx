import styled from "@emotion/styled";
import DOMPurify from "dompurify";

interface BodyProps {
  children: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
  return (
    <BodyContainer
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(children as string),
      }}
    ></BodyContainer>
  );
}

const BodyContainer = styled.main`
  grid-area: main;
  display: grid;
  border-radius: var(--radius-md);
  background: #fafbff;
  padding: 24px;
`;
