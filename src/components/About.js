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
      mix-blend-lighten bg-top hidden lg:flex max-w-[420px] lg:max-w-
          [482px] '></motion.div>
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
      <p className='mb-2' >I'm Satyam Saurav, a fresher developer with expertiese in<p className='text-yellow-400 ' >JavaScript, React, Redux, Material-Ui and modern Css frameworks like
        tailwind css</p>and I am also familiar with java I also have hands on experience on these technologies with projects on them. <p  className='text-yellow-300' > I am actively
         seeking job opportunities and
        opportunities to kickstart my carrer in development. </p>
        i have developed multiple projects, including <p className='text-red-600 font-semibold '> QuickWork, Mausam, Flixcart and some more.</p> These projects reflect my dedication to build 
        functional and engaging web applications. I am eager to contribute my skills to a dyanamic team, where i can continue learning and growing as a
        developer. Whether it's a job or an internship, I am open to any opportunity that allows me to showcase and refine my skills.

         </p>
     </motion.div>
     </div>
</div>
  </section>
);
};

export default About;
