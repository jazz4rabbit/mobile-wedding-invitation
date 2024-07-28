import styled from '@emotion/styled';
// import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text';
import Modal from 'react-modal';
import { useState } from 'react';
import RsvpModal from './RsvpModal';



const Rsvp = () => {
  return (
    <RsvpWrapper>
      <Heading2>
        축하의 마음으로 참석해주시는
        <br />
        모든 분들을 귀하게 모실 수 있도록
        <br />
        참석 의사를 전달 부탁드립니다.
      </Heading2>
      <RsvpModal />

    </RsvpWrapper>
  );
};

export default Rsvp;

const RsvpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;
