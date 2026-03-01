import styled from "@emotion/styled";
import IconCloud from "./IconCloud";

export default function TagCloud() {
  return (
    <STagCloud>
      <IconCloud />
    </STagCloud>
  );
}

const STagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 220px;
  height: 220px;
`;