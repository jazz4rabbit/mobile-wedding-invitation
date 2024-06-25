import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg'
import flowerImg from "@/assets/effect/falling-flower-loop.gif"

const Main = () => {
  const { greeting } = data;
  return (
    <div style={{ position: 'relative' }}>
      {/* <img src={flowerImg} className='absolute w-full h-full' /> */}
      <FallingFlowerImg src={flowerImg} />
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const FallingFlowerImg = styled.img`
  position:  absolute;
  left: 0;
  width: 100%;
`;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
`;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
