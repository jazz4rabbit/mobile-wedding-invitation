import React from 'react';
import data from '@/data.json';
// import { BrideAndGroom } from '@/types/data.ts';

// const HostContainer = styled.div`
//   gap: 8px;
//   font-family: HSSanTokki20-Regular, serif;
// `;

export default function Host() {
  const { groom, bride } = data.greeting.host;
  return (
    <>
      <div className='gap-2 font-title font-serif'>
        <HostInfo person={groom} />
        <HostInfo person={bride} />
      </div>
    </>
  );
};

// const HostDetails = styled.div`
//   // padding: 0 55px;
//   justify-content: center;
//   white-space: nowrap;
//   display: flex;
//   gap: 6px;
//   text-align: center;
//   align-items: center;
//   font-weight: 700;
// `;
function HostInfo ({ person }) {
  return (
    <div className='justify-center whitespace-nowrap flex gap-2 text-center items-center font-bold'>
      {person.parents && (
        <>
          {person.parents.map((parent, index) => (
            <div className='mx-auto' key={index}>
              {index > 0 && ' · '}
              {parent.name}
            </div>
          ))}
        </>
      )}
      <div className='not-italic leading-6 flex gap-2 w-12'>
        <div>의</div>
        <div className='w-[inherit]'>{person.relation}</div>
      </div>
      <span className='font-semibold text-xl text-[#4f4f4f] '>{person.name}</span>
    </div>
  );
};

// const HighlightedName = styled.span`
//   font-weight: 600;
//   font-size: 1.1rem;
//   color: #4f4f4f;
//   margin-right: 5px;
// `;


// const RelationText = styled.div`
//   font-style: normal;
//   line-height: 26px;
//   width: 50px;
//   display: flex;
//   gap: 6px;
// `;

// const Relation = styled.div`
//   width: inherit;
// `;
