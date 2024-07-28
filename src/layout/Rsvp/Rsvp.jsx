import styled from '@emotion/styled';
// import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text';
import Modal from 'react-modal';
import { useState } from 'react';
// import RsvpModal from './RsvpModal';
import Button from '@/components/Button';
import data from '@/data.json';



const Rsvp = () => {
  const { gleForm } = data.rsvpInfo;
  return (
    <RsvpWrapper>
      <Heading2>
        축하의 마음으로 참석해주시는
        <br />
        모든 분들을 귀하게 모실 수 있도록
        <br />
        참석 의사를 전달 부탁드립니다.
      </Heading2>
      {/* <RsvpModal /> */}
      <RsvpButton onClick={() => window.open(gleForm)}>참석 의사 전달하기</RsvpButton>

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

const RsvpButton = styled.button`
  width: 100%;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: white;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
`;