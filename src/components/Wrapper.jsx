// export default function Wrapper({ children }) {
//   return (
//     <section className="p-[30px] flex items-center flex-col text-[#222] ">
//       {children}
//     </section>
//   );
// }

import styled from '@emotion/styled';

const Wrapper = styled.section`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #222;
  overflow: auto;
`;

export default Wrapper;
