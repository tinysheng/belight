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
  border-radius: var(--radius-md);
  background: #fafbff;
  padding: 32px;
  line-height: 1.8;
  color: #333;

  h1, h2, h3, h4, h5, h6 {
    margin: 24px 0 16px;
    color: #1a1a1a;
    line-height: 1.4;
  }

  h1 { font-size: 24px; }
  h2 { font-size: 22px; }
  h3 { font-size: 20px; }
  h4 { font-size: 18px; }

  p {
    margin: 12px 0;
  }

  a {
    color: var(--primary-color);
    text-decoration: underline;
  }

  ul, ol {
    padding-left: 24px;
    margin: 12px 0;
  }

  ul { list-style: disc; }
  ol { list-style: decimal; }

  li {
    margin: 4px 0;
  }

  img {
    max-width: 100%;
    border-radius: var(--radius-sm);
  }

  pre, code {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    background: #f4f4f5;
    border-radius: var(--radius-sm);
  }

  pre {
    padding: 16px;
    overflow-x: auto;
  }

  code {
    padding: 2px 6px;
    font-size: 0.9em;
  }

  pre code {
    padding: 0;
    background: transparent;
  }

  blockquote {
    margin: 16px 0;
    padding: 12px 16px;
    border-left: 4px solid var(--primary-color);
    background: #f4f4f5;
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }

  table {
    width: 100%;
    margin: 16px 0;
    border-collapse: collapse;
  }

  th, td {
    padding: 10px 12px;
    border: 1px solid #e5e5e5;
  }

  th {
    background: #f4f4f5;
    font-weight: 600;
  }
`;
