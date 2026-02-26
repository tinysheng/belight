import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "./Button";

export default function LinkGroup() {
  return (
    <LinkGroupContainer>
      <Button />
      <LinkTag target="_blank" to="https://beian.miit.gov.cn/#/Integrated/index">
        豫ICP备2025136949号-1
      </LinkTag>
    </LinkGroupContainer>
  );
}

const LinkGroupContainer = styled.div`
  display: grid;
  gap: 10px;

  opacity: 0;
  scale: 0.8;
  transform: translate(0, -50%);

  animation: link-show 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 1000ms;

  @keyframes link-show {
    to {
      opacity: 1;
      scale: 1;
      transform: translate(0, 0);
    }
  }
`;

const LinkTag = styled(Link)`
  font-size: 13px;
  color: #0099cc;

  &:hover {
    color: #00ccff;
  }
`;
