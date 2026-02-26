import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

interface SurfaceProps {
  className?: string;
  enterOrder?: number;
  vtName?: string;
}

export default function Surface({
  children,
  className,
  enterOrder = 0,
  vtName,
}: PropsWithChildren<SurfaceProps>) {
  return (
    <SurfaceWrapper
      className={className}
      enterOrder={enterOrder}
      vtName={vtName}
    >
      {children}
    </SurfaceWrapper>
  );
}

const SurfaceWrapper = styled.section<SurfaceProps>`
  view-transition-name: ${({ vtName }) => vtName || "none"}
  will-change: transform;

  padding: 10px;
  border-radius: var(--radius-md);
  background: #F8F8FFAA;
  box-shadow: rgba(51, 51, 51, 0.3) 0px 0px 0px 0.5px;
  backdrop-filter: blur(2px);

  opacity: 0;
  scale: 0.3;

  animation: card-show 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: ${({ enterOrder = 0 }) => enterOrder * 120}ms;

  @keyframes card-show {
    to {
      opacity: 1;
      scale: 1;
    }
  }

  &:hover {
    border: 1px solid #00ccff55;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
