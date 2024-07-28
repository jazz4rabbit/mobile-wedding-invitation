import data from '@/data.json';
// import mainImg from '@/assets/images/entry.jpg'
import mainImg from '@/assets/images/14.jpg'
import flowerImg from "@/assets/effect/falling-flower-loop.gif"

const Main = () => {
  const { greeting } = data;
  return (
    <div className='relative'>
      <img className='absolute left-0 w-full' src={flowerImg} />
      {/* <img className='inline rounded-t-full w-[90%] pt-5' src={mainImg} /> */}
      <img className='inline w-[90%] pt-5' src={mainImg} />
      <p className='font-title leading-tight text-4xl whitespace-pre-line my-8'>{greeting.title}</p>
      <p className='text-lg text-[#2F2120] whitespace-pre-line my-8'>{greeting.eventDetail}</p>
      {/* <MainTitle>{greeting.title}</MainTitle> */}
      {/* <SubTitle>{greeting.eventDetail}</SubTitle> */}
    </div>
  );
};

export default Main;