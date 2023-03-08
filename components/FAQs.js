import { useState, Fragment } from "react";
import Footer from "../components/footer";
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
    mount: {  opacity:1 },
    unmount: { opacity:0 },
  };
 
  return (
  <div className='w-full h-auto md:mb-0 mb-[-100px] overflow-y-hidden'>
    <div id='faqs'className='md:px-16 px-4 py-4 bg-black/30 filter backdrop-blur-sm text-white overflow-y-hidden'>
      <Accordion open={open === 1} animate={customAnimation} className='text-start mx-[-10px] border-b border-white'>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Background
        </AccordionHeader>
        <AccordionBody className='text-justify'>
         des
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 2} animate={customAnimation} className='text-start mx-[-10px] border-b border-white'>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Projects
        </AccordionHeader>
        <AccordionBody className='text-justify'>
        des
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 3} animate={customAnimation} className='text-start mx-[-10px] border-b border-white'>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Team
        </AccordionHeader>
        <AccordionBody className='text-justify'>
          des
        </AccordionBody>
      </Accordion>
      </div>
      <Footer />
    </div>
  );
}
