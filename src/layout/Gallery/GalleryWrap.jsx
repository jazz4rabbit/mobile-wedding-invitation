import { useState } from 'react';
import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery';
import AnimateHeight from 'react-animate-height';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(true);
    setHeight('auto');
  };

  const [height, setHeight] = useState('400px');


  return (
    <ContentsWrap>
      <ImageMoreWrap isMoreView={isMoreView}  onClick={onClickImageMoreViewButton}>
        {!isMoreView && <WhiteGradientOverlay />}
      <AnimateHeight
        id="example-panel"
        duration={500}
        height={height} // see props documentation below
      >
        <PhotoGallery />
      </AnimateHeight>
      </ImageMoreWrap>
      {!isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>더보기</PlusButton>
      )}
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  // width: 100%;
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div`
  // width: 100%;
  position: relative;
  max-height: ${(props) =>
    props.isMoreView
      ? ''
      : ''}; /* isMoreView 상태가 true일 때는 높이 제한 없이, false일 때는 195px로 작게 보이도록 */
  overflow: hidden;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
`;

const PlusButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 6px 12px;
  font-size: 1rem;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
`;
