import styled from "@emotion/styled";

interface OverlayProps {
  onCloseSearch: () => void;
}

export default function OverLay({ onCloseSearch }: OverlayProps) {
  const handleClick = () => {
    onCloseSearch();
  };

  return <OverLayWrapper onClick={handleClick} />;
}

const OverLayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000066;
  z-index: 99;
`;
