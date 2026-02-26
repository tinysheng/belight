import styled from "@emotion/styled";

export const Top = styled.section`
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;

  [data-mode="other"] & {
    display: none;
  }
`;

export const LeftMiddle = styled.aside`
  grid-area: l1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 20px;

  [data-mode="other"] & {
    padding-right: 0;
  }
`;

export const LeftBottom = styled.aside`
  grid-area: l2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  [data-mode="other"] & {
    display: none;
  }
`;

export const RightTop = styled.aside`
  grid-area: r1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  [data-mode="other"] & {
    display: none;
  }
`;

export const RightMiddle = styled.aside`
  grid-area: r2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;

  [data-mode="other"] & {
    display: none;
  }
`;

export const RightBottom = styled.section`
  grid-area: r3;
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
  align-items: flex-start;
  gap: 20px;

  [data-mode="other"] & {
    display: none;
  }
`;

export const Bottom = styled.section`
  grid-area: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;

  [data-mode="other"] & {
    display: none;
  }
`;

export const LinkArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
