import styled from "@emotion/styled";
import Surface from "../../components/Surface";

export default function Home() {
  return (
    <HomeContainer>
      <AlbumBox>
        <Avatar
          src="https://free.picui.cn/free/2026/02/20/699834ee30978.jpg"
          alt=""
        />
      </AlbumBox>
      <WelcomeText>Hello, There is Belight!</WelcomeText>
    </HomeContainer>
  );
}

const HomeContainer = styled(Surface)`
  display: grid;
  place-items: center;
  align-content: space-evenly;

  width: 100%;
  height: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
    radial-gradient(
      ellipse farthest-side at 76% 77%,
      rgba(245, 228, 212, 0.25) 4%,
      rgba(255, 255, 255, 0) calc(4% + 1px)
    ),
    radial-gradient(
      circle at 76% 40%,
      #fef6ec 4%,
      rgba(255, 255, 255, 0) 4.18%
    ),
    linear-gradient(135deg, #ff0000 0%, #000036 100%),
    radial-gradient(
      ellipse at 28% 0%,
      #ffcfac 0%,
      rgba(98, 149, 144, 0.5) 100%
    ),
    linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%);
  background-blend-mode: normal, normal, normal, screen, overlay, normal;
`;

const AlbumBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
`;

const WelcomeText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-shadow:
    0 0 10px #fff,
    0 0 20px #fff,
    0 3px 8px #333;
`;
