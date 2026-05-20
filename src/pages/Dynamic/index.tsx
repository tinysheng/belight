import styled from "@emotion/styled";
import SayCard from "@/components/SayCard";

export default function Dynamic() {
  return (
        <>
      <StyledNote>这里记录着我想记录的生活 ~</StyledNote>
      <SayCard
        status={{
          id: '1',
          user: {
            avatar: 'https://i.pravatar.cc/150?img=3',
            name: 'Jonty'
          },
          createdAt: '2025年02月20日 16:52:44 PM',
          content: '超炫的黑页：',
          link: 'https://nobb.cc/item/html/4hack/',
          deviceInfo: '🪟 Windows 11 / 🌐 Google Chrome'
        }}
      />
      <SayCard
        status={{
          id: '1',
          user: {
            avatar: 'https://i.pravatar.cc/150?img=3',
            name: 'Jonty'
          },
          createdAt: '2025年02月20日 16:52:44 PM',
          content: '超炫的黑页：',
          link: 'https://nobb.cc/item/html/4hack/',
          deviceInfo: '🪟 Windows 11 / 🌐 Google Chrome'
        }}
      />
    </>
  );
}

const StyledNote = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px 16px;
  background: rgba(242, 236, 255, 0.4);
  border-radius: 3px;
  color: #1d2b53;
  font-size: 16px;
  line-height: 1.5;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #c084fc, #a855f7);
  }
`;