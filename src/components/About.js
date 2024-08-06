import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants'


const About = () => {
const [ref, inView] = useInView({
  threshold: 0.5,
});

  return (
     <section className='section' id='about' ref={ref}>
    <div className="container-mx-auto">
      <div className='flex flex-col mx-3 gap-y-10 lg:flex-row lg:items-center
       lg:gap-x-20 lg:gap-y-0 h-screen ' >
     {/* img */}
     <motion.div
     variants={fadeIn('right',0.3)}
     initial='hidden'
     whileInView={'show'}
     viewport={{once: false,amount: 0.3}}
     className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
      mix-blend-lighten bg-top '></motion.div>
     {/* Text */}
     <motion.div 
      variants={fadeIn('left',0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false,amount: 0.3}}
     className='flex-1 ' >
      <h2 className='h2 font-semibold text-accent' >About Me</h2>
      <h3 className='sm:text-2xl font-light mb-2'>
        I'm a Frontend Developer with experience on React, Tailwind-CSS, Material-Ui,
         JavaScript & Redux.
         </h3>
      <p className='mb-2' >I'm passionate frontend developer creating innovative,
        responsive web apps with modern technologies & best practices.
         </p>
     </motion.div>
     </div>
</div>
  </section>
);
};

export default About;
