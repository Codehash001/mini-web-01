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
    mount: { scale:1 , opacity:1 },
    unmount: { scale :0.1 , opacity:0 },
  };
 
  return (
  <div className='w-screen h-auto md:mb-0'>
    <div id='faqs'className='md:px-16 px-4 py-4 bg-black/30 filter backdrop-blur-sm text-white'>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Background</h1>
            <div>{open == 1 ?
            (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='text-justify'>
         des
        </AccordionBody>
      </Accordion>


      
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(2)} className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Our brands</h1>
            <div>{open == 2 ?
            (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='text-justify'>
         des
        </AccordionBody>
      </Accordion>


      
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(3)} className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Team</h1>
            <div>{open == 3 ?
            (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='text-justify flex flex-col items-start'>
         <div className="md:flex items-start justify-start">

          <div className=" flex flex-col items-center w-full h-full p-4 bg-gray-300">
            <img src="rarestudiosnewyork-sitebg.png" className="w-[150px] h-[150px]"/>
            <h1 className="font-semibold text-white text-[21px] mt-1">Ethereum.jpg</h1>
            <h1 className="font-medium text-white text-[16px]">Founder</h1>
            <h1 className="font-medium text-white text-[18px] mt-3">Entrepreneur <br/> & Blockchain OG</h1>
          </div>
          
          <div className=" flex flex-col items-center w-full h-full p-4 bg-gray-300 md:mx-5">
            <img src="rarestudiosnewyork-sitebg.png" className="w-[150px] h-[150px]"/>
            <h1 className="font-semibold text-white text-[21px] mt-1">Ethereum.jpg</h1>
            <h1 className="font-medium text-white text-[16px]">Founder</h1>
            <h1 className="font-medium text-white text-[18px] mt-3">Entrepreneur <br/> & Blockchain OG</h1>
          </div>

          <div className=" flex flex-col items-center w-full h-full p-4 bg-gray-300">
            <img src="rarestudiosnewyork-sitebg.png" className="w-[150px] h-[150px]"/>
            <h1 className="font-semibold text-white text-[21px] mt-1">Ethereum.jpg</h1>
            <h1 className="font-medium text-white text-[16px]">Founder</h1>
            <h1 className="font-medium text-white text-[18px] mt-3">Entrepreneur <br/> & Blockchain OG</h1>
          </div>

         </div>
        </AccordionBody>
      </Accordion>


      </div>
    </div>
  );
}
