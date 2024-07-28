import { useState } from 'react';
import styled from '@emotion/styled';
import { push, ref, serverTimestamp } from 'firebase/database';
import { realtimeDb } from './firebase.js';
import Modal from 'react-modal';
import { Heading2 } from '@/components/Text';
import Button from '@/components/Button';

const customModalStyles = {
  overlay: {
  //   backgroundColor: " rgba(0, 0, 0, 0.4)",
  //   width: "100%",
  //   height: "100vh",
    zIndex: "150",
  //   position: "fixed",
  //   top: "0",
  //   left: "0",
  },
  content: {
    width: "360px",
    height: "400px",
    zIndex: "151",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
    color: 'black',
    textAlign: 'start',
    padding: '0px',
    border: 'solid 2px #ccc'
  },
};



Modal.setAppElement('#root');

    //   <button onClick={handleOpenModal}>Trigger Modal</button>
    //   <Modal
    //     isOpen={showModal}
    //     // onRequestClose={handleCloseModal}
    //     style={customModalStyles}
    //     ariaHideApp={false}
    //     contentLabel="Pop up Message"
    //     shouldCloseOnOverlayClick={false}
    //   >
    //   <button onClick={handleCloseModal}>close</button>
    // </Modal>

    //   {/* <CommentForm /> */}

// TODO: 방명록 기능 사용시, realtime db에 guestbook 추가
const guestbookRef = ref(realtimeDb, 'guestbook');

const RsvpModal = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [food, setFood] = useState('Y');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    toggleBrideGroom
    // if (!name || !message) {
    if (!name || !food || !count) {
      e.preventDefault();
      alert('이름과 메시지를 채워주세요. 🥹');
    } else {
      e.preventDefault();
      // TODO: 이름, 메시지, 생성시간, 작성날짜 저장.
      const guestbookMessage = {
        side: toggleBrideGroom,
        sender: name,
        count: count,
        food: food,
        // message: message,
        createdAt: serverTimestamp(),
        date: new Date().toLocaleString(),
      };
      void push(guestbookRef, guestbookMessage);
      
      alert('메시지를 보냈습니다. 💌');
      setName('');
      setMessage('');
    }
  };

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';

  };
  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  const [toggleBrideGroom, setToggleBrideGroom] = useState('groom');
  const handleToggleBrideGroom = () => {
    if (toggleBrideGroom === 'groom') setToggleBrideGroom('bride');
    else setToggleBrideGroom('groom');
  }

  return (
    <>
    <RsvpButton onClick={handleOpenModal}>참석 의사 전달하기</RsvpButton>
    <Modal
      isOpen={showModal}
      // onRequestClose={handleCloseModal}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={false}
    >
      <div className="
            border-solid
            bg-white
            h-full
            relative
            z-[152]
          "
      >
        <Wrapper>
    <div style={{display: 'flex'}}>
      {/* <Heading2>참석 의사 전달</Heading2> */}
      <p className='text-xl ml-0 m-2 whitespace-pre-line'>참석 의사 전달</p>
      <p className='cursor-pointer ml-auto self-center' onClick={handleCloseModal}>X</p>
      {/* <Heading2 classNames="ml-auto" onClick={handleCloseModal} style={{ justifyContent: 'end', marginLeft: 'auto'}}>X</Heading2> */}
      {/* <Button onClick={handleCloseModal} style={{ justifyContent: 'end', marginLeft: 'auto'}}>X</Button> */}
      {/* <Button onClick={handleCloseModal} className='ml-auto h-fit self-center'>X</Button> */}
    </div>
    {/* TODO GRID로 변경하기 */}
    {/* <FormWrapper onSubmit={handleSubmit}> */}
    <form className='grid grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)_minmax(0,_1.2fr)] gap-4 mt-4 items-center' onSubmit={handleSubmit}>
      <div>구분</div>
      <div className='col-span-2 flex flex-1 items-center'>
        <div className='w-full text-center mr-2'>
          <input className='hidden' type='radio' id='groom' name='gnb' value='groom' onChange={handleToggleBrideGroom} />
          <label className={`h-10 rounded-md content-center block w-full ${toggleBrideGroom === 'groom' ? 'bg-indigo-400 text-white' : 'bg-slate-200'}`} htmlFor='groom'>
            🤵🏻‍️ 신랑측
          </label>
        </div>
        <div>🤍</div>
        <div className='w-full text-center ml-2'>
          <input className='hidden' type='radio' id='bride' name='gnb' value='bride' onChange={handleToggleBrideGroom} />
          <label className={`h-10 rounded-md content-center block w-full ${toggleBrideGroom === 'bride' ? 'bg-rose-400 text-white' : 'bg-slate-200'}`} htmlFor='bride'>
          👰🏻‍ 신부측
          </label>
        </div>
      </div>
      <div>성함</div>
      <input
        className='col-span-2 border rounded-sm border-slate-300 p-2 box-border'
        type='text'
        placeholder='성함'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>참석인원</div>
      <input
        className='col-span-2 border rounded-sm border-slate-300 p-2 box-border'
        type='number'
        placeholder='1~10'
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div>식사여부</div>
      <div className='col-span-2 flex flex-1 items-center'>
        <div className='w-full text-center mr-2'>
          <input className='hidden' type='radio' id='yfood' name='food' value='Y' onChange={(e) => setFood('Y')} />
          <label className={`h-10 rounded-md content-center block w-full ${food === 'Y' ? 'border border-slate-500 bg-white' : 'bg-slate-200'}`} htmlFor='yfood'>
            예정
          </label>
        </div>
        {/* <div className='w-full text-center ml-2'> */}
        <div className='w-full text-center'>
          <input className='hidden' type='radio' id='nfood' name='food' value='N' onChange={(e) => setFood('N')} />
          <label className={`h-10 rounded-md content-center block w-full ${food === 'N' ? 'border border-slate-500 bg-white' : 'bg-slate-200'}`} htmlFor='nfood'>
            안함
          </label>
        </div>
        <div className='w-full text-center ml-2'>
          <input className='hidden' type='radio' id='xfood' name='food' value='X' onChange={(e) => setFood('X')} />
          <label className={`h-10 rounded-md content-center block w-full ${food === 'X' ? 'border border-slate-500 bg-white' : 'bg-slate-200'}`} htmlFor='xfood'>
            미정
          </label>
        </div>
      </div>
      {/* <MessageInput
        placeholder="메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      /> */}
      {/* <SubmitButton type="submit">등록</SubmitButton> */}
      <button
        type='submit'
        className='col-span-3 border border-emerald-300 rounded-md mx-10 p-2 bg-emerald-200 mt-2'
      >
        참석의사 전달하기
      </button>
      </form>
    {/* </FormWrapper> */}

        </Wrapper>

      </div>
    </Modal>
    </>
  );
};

// const FormWrapper = styled.form`
//   display: grid;
//   flex-direction: column;
//   gap: 2px;
//   overflow: visible;
//   align-items: center;
//   margin-top: 1rem
// `;

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
  font-weight: 300;
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

const SubmitButton = styled.button`
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

function Wrapper({ children }) {
  return (
    <section className="p-6 pb-7 h-full text-[#222] relative">
      {children}
    </section>
  );
}

export default RsvpModal;
