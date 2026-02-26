import styled from "@emotion/styled";

export default function Aside() {
  return (
    <AsideWrapper>
      <div>Aside</div>
    </AsideWrapper>
  );
}

const AsideWrapper = styled.aside`
  grid-area: aside;
  display: grid;
  background: #fafbff;
`;
