import { useState, useEffect, useRef } from "react";
import Container from "@/layout/Container";
import Wrapper from "@/components/Wrapper";
import Main from "@/layout/Main";
import { Heading1 } from "@/components/Text";
import Invitation from "@/layout/Invitation/Invitation";
import GalleryWrap from "@/layout/Gallery/GalleryWrap";
import Account from "@/layout/Account/Account";
import Location from "@/layout/Location/Location";
import Rsvp from "@/layout/Rsvp/Rsvp";
import data from '@/data.json';
import JSConfetti from 'js-confetti';
import FloatingBar from "@/layout/FloatingBar/FloatingBar";


function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  const { emojis } = data;
  const jsConfetti = new JSConfetti();

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    void jsConfetti.addConfetti({ emojis });
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Heading1>모시는 글</Heading1>
          <Invitation />
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <Heading1>Gallery</Heading1>
          <GalleryWrap />
        </Wrapper>
        <Wrapper>
          <Heading1>마음 전하실 곳</Heading1>
          <Account />
        </Wrapper>
        <Wrapper>
          <Heading1>오시는 길</Heading1>
          <Location />
        </Wrapper>
        <Wrapper>
          <Heading1>참석 의사 전달</Heading1>
          <Rsvp />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
    </>
  );
}

export default App;
