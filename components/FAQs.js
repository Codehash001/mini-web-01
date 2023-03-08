import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function FAQs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <div id='faqs'className='md:px-16 px-4 py-4 bg-black/90 text-white'>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className='text-start'>
          Background
        </AccordionHeader>
        <AccordionBody className='text-justify'>
         des
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 2} animate={customAnimation} className='text-start'>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Projects
        </AccordionHeader>
        <AccordionBody className='text-justify'>
        des
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 3} animate={customAnimation} className='text-start'>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Team
        </AccordionHeader>
        <AccordionBody className='text-justify'>
          des
        </AccordionBody>
      </Accordion>
    </div>
  );
}
