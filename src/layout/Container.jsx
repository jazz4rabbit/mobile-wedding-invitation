// export default function Container({ children }) {
//   return (
//     <div
//       className="
//         border-solid
//         border-transparent
//         [border-image-source:url('background.png')]
//         [border-image-slice:30%_49%]
//         [border-image-width:140px]
//         bg-white
//         max-w-[500px]
//         w-[500px]
//         min-w-[320px]
//         pb-4
//       "
//     >
//       {children}
//     </div>
//   );
// }

import styled from '@emotion/styled';

const Container = styled.div`
  border: 30px solid transparent; /* 테두리의 초기 값 설정 */
  border-image-source: url('background.png'); /* 이미지 경로 설정 */
  border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  border-image-width: 140px; /* 테두리 이미지의 너비 설정 */
  background-color: #ffffff;
  width: 500px;
  max-width: 500px;
  min-width: 320px;
  padding-bottom: 1rem;
  
`;
export default Container;
