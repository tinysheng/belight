import styled from "@emotion/styled";

export default function Album() {
  return (
    <AlbumBox>
      <Photo
        src="https://free.picui.cn/free/2026/01/01/69555399d8e3b.webp"
        alt=""
      />
    </AlbumBox>
  );
}

const AlbumBox = styled.div`
  width: 340px;
  height: 200px;
  border-radius: var(--radius-md);
  background: #fff;
  overflow: hidden;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-md);
`;
