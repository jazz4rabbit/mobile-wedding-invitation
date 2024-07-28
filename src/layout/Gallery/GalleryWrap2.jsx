import styled from '@emotion/styled';
import images from "@/layout/Gallery/Images.js";
import ImageGallery from "react-image-gallery";

import { useState } from "react";
import PlusButton from '@/components/PlusButton'
import PhotoGallery from "@/layout/Gallery/PhotoGallery";

export default function GalleryWrap() {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(true);
  };

  return (
    <ContentsWrap>
      <ImageMoreWrap isMoreView={isMoreView}  onClick={onClickImageMoreViewButton}>
        {!isMoreView && <WhiteGradientOverlay />}
        {/* <div>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
          <p>hi hi hi hi hi hi hi hi hi hi hi hi</p>
        </div> */}
        <PhotoGallery />
      </ImageMoreWrap>
      {!isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>더보기</PlusButton>
      )}
    </ContentsWrap>
  );
}

// const ContentsWrap = ({children}) => {
//   return (
//     <div className="">
//       {children}
//     </div>
//   );
// }
const ContentsWrap = styled.div`
  width: 100%;
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = ({children, isMoreView, onClick}) => {
  const className = isMoreView ? '' : 'max-h-[20vh]';
  return (
    <div onClick={onClick} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

const WhiteGradientOverlay = ({children}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgb(255,255,255)_90%]">
      {children}
    </div>
  );
}