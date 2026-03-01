import styled from "@emotion/styled";

export default function Background() {

  return (
    <Wrapper>
      <div className="cracked-earth" />
      <svg width={0} height={0}>
        <filter id="cracks">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves={5}
            seed={10}
            result="noise"
          />
          <feColorMatrix
            type="luminanceToAlpha"
            in="noise"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="plates">
            <feFuncA type="discrete" tableValues="0 1" />
          </feComponentTransfer>
          <feConvolveMatrix
            order="3 3"
            kernelMatrix="-1 -1 -1
        -1  8 -1
        -1 -1 -1"
            in="plates"
            result="edges"
          />
          <feComponentTransfer in="edges" result="invertedEdges">
            <feFuncR type="table" tableValues="1 0" />
            <feFuncG type="table" tableValues="1 0" />
            <feFuncB type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feFlood floodColor="#3333333c" result="bgColor" />
          <feComposite operator="in" in="bgColor" in2="invertedEdges" />
        </filter>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;

  .cracked-earth {
    width: 100%;
    height: 100%;
    background-color: #191919;
    filter: url(#cracks);
  }
`;