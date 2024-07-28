export function Heading1({ children }) {
  return (
    <p className="font-title font-serif  text-2xl m-2 text-[#e88ca6] whitespace-pre-line my-2">{ children }</p>
  );
}

export function Heading2({ children }) {
  return (
    <p className="text-base m-2 whitespace-pre-line my-4">{children}</p>
  );
}

export function PointTitle({ children }) {
  return (
    <p className="font-title font-serif m-0 leading-none text-[#e88ca6] whitespace-pre-line my-2">{children}</p>
  );
}

export function Paragraph({ children }) {
  return (
    <p className="leading-9 whitespace-pre-line my-4 max-[345px]:text-sm">{children}</p>
  );
}

export function Caption({children, textAlign}) {
  const classNameExtra = textAlign ? textAlign : 'text-start';
  return (
    <p className={`font-extralight ${classNameExtra} whitespace-pre-line my-4`}>{children}</p>
  );
}


// = styled.p<{ textAlign?: string }>`


// export const Caption = styled.p<{ textAlign?: string }>`
//   font-weight: 200;
//   text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
//   white-space: pre-line;
// `;
