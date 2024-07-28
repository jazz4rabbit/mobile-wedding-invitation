import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';
import AnimateHeight from 'react-animate-height';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    if (height === 0) setHeight('auto');
    else setHeight(0);
  };

  const [height, setHeight] = useState(0);

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p className='py-4'>{title}</p>

        <span>
          <ExpandMore fill="#e88ca6" />
        </span>
      </AccordionHeader>

        <AnimateHeight
        id="example-panel2"
        duration={500}
        height={height} // see props documentation below
      >
      {/* {isOpen && <AccordionContent>{children}</AccordionContent>} */}
      <AccordionContent>{children}</AccordionContent>
</AnimateHeight>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  font-family: HSSanTokki20-Regular, serif;
  border: 1px solid #e6ece1;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6ece1;
  padding: 0 15px;
  cursor: pointer;
  & > p {
    color: #44484d;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }
`;

const AccordionContent = styled.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: #ffffff;
`;
