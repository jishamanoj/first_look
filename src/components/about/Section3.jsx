"use client"

import React, { useState } from 'react';
import { motion } from "framer-motion"


function Section3() {
  const [visibleSections, setVisibleSections] = useState(2); // Initially show first two sections
  const [isExpanded, setIsExpanded] = useState(false); // Track whether the second set of sections should appear

  // Timeline data
  const timelineData = [
    { date: '2021 May', text: 'The idea to create a unique matchmaking platform is sparked, setting the foundation for our vision' },
    { date: '2021 Dec', text: 'We develop our first prototype and begin rigorous testing to refine our concept.' },
    { date: '2021 Dec', text: 'The idea to create a unique matchmaking platform is sparked, setting the foundation for our vision' },
    { date: '2022 March', text: 'The idea to create a unique matchmaking platform is sparked, setting the foundation for our vision' },
  ];

  // Function to show the next two sections
  const addSections = () => {
    setIsExpanded(true);
    setVisibleSections((prev) => prev + 2); // Add two more sections
  };

  return (
    <div className='px-6 md:px-14'>
      <div className='w-full bg-white rounded-[50px] px-4 md:px-0 py-10'>
        <div className='w-full'>
          <motion.h1 
          
          initial={{ y: "10vw", opacity: 0 }}
          whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
          viewport={{ once: true, amount: 0.8 }}
          className='text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[54px] text-[#202020] font-semibold md:text-center'>
            Tracing our Evolution
          </motion.h1>
        </div>

        {/* First two sections are always visible */}
        {timelineData.slice(0, 2).map((entry, index) => (
          <div key={index} className="w-full pt-7">
            <motion.p 
             initial={{ y: "10vw", opacity: 0 }}
             whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
             viewport={{ once: true, amount: 0.8 }}
            className='text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-black font-semibold md:text-center pt-2 lg:pt-5'>
              {entry.date}
            </motion.p>
            <motion.p
             initial={{ y: "10vw", opacity: 0 }}
             whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
             viewport={{ once: true, amount: 0.8 }}
            className='text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-black font-light md:text-center pt-5 sm:pe-[100px] md:px-[150px] lg:px-[200px] xl:px-[340px]'>
              {entry.text}
            </motion.p>
            <div className='w-[25px] border-[#FE1940] border-b-2 md:m-auto pt-5'></div>
          </div>
        ))}

        {/* The next two sections that appear with sliding effect */}
        {timelineData.slice(2, visibleSections).map((entry, index) => (
          <div
            key={index + 2}
            className={`w-full pt-7 overflow-hidden transition-all duration-700 ease-in-out transform ${
              isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              maxHeight: isExpanded ? '300px' : '0px', // Control height when expanded
            }}
          >
            <p 
             
            className='text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-black font-semibold md:text-center pt-2 lg:pt-5'>
              {entry.date}
            </p>
            <p
            
            className='text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-black font-light md:text-center pt-5 sm:pe-[100px] md:px-[150px] lg:px-[200px] xl:px-[340px]'>
              {entry.text}
            </p>
            <div className='w-[25px] border-[#FE1940] border-b-2 md:m-auto pt-5'></div>
          </div>
        ))}

        {/* Down arrow icon to show more sections */}
        {visibleSections < timelineData.length && (
          <motion.div
          initial={{ y: "10vw", opacity: 0 }}
          whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
          viewport={{ once: true, amount: 0.8 }}
          className='w-6 md:w-full'>
            <img
            src='/asset/downarrow.svg'
            className='size-16 md:size-20 lg:size-24 xl:size-auto md:m-auto pt-4 lg:pt-14 xl:pt-20 cursor-pointer'
            onClick={addSections}
            alt='Down Arrow'
          />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Section3;