// import styled from '@emotion/styled';
import data from '@/data.json';
import Host from '@/layout/Invitation/Host';
// import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text';

export default function Invitation({ children }) {
  const { greeting } = data;
  return (
    <div className='flex flex-col items-center gap-5'>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
    </div>
  );
};


// const InvitationWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
// `;
