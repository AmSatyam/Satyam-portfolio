import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'

const services = [
  {
     name: 'UI/UX Design',
    description: 'Crafting intuitive and aesthetically pleasing user interfaces that enhance user experiences is my forte. I combine creativity with strategic design principles to create seamless and engaging digital journeys. ',
    link: 'learn more'
   },
   {
    name: 'Development',
   description: 'Bringing ideas to life through clean, efficient, and scalable code. My development work focuses on building robust, responsive, and user-friendly applications that meet modern web standards. ',
   link: 'learn more'
  },
  {
    name: 'Writter',
   description: 'Communicating complex ideas in a clear, concise manner. I specialize in creating content that informs and resonates with the target audience, bridging the gap between technical and non-technical stakeholders. ',
   link: 'learn more'
  }
]



const Services = () => {
  return (
  
  <section className='section' id='services' >
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row  '>
        <motion.div
        variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' >
          <h2 className='h2 font-semibold text-accent mb-6 ' >
            What i Do ?
          </h2>
          <h3 className='h3 max-w-[420px] mb-16' >
          I'm passionate frontend developer creating innovative,
          responsive web-apps with modern technologies & best practices.
          </h3>
          <button className='btn btn-sm' > See my work </button>
        </motion.div>
        <motion.div 
        variants={fadeIn('right',0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount: 0.3}}
        className='flex-1' >
          <div>
            {services.map((services, index)=>{

              const {name, description,link} = services;
              return (
                <div className='border-b border-white/20 h-[150px] mb-[38px] flex' key= {index} >
                  <div className='max-w-[476px] ' >
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6' > {name} </h4>
                    <p className='font-secondary leading-tight' >{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end' > <a href="#" className='btn w-9 h-9 mb-[42px]
                   flex justify-center items-center' >
                    <BsArrowUpRight />
                   </a>
                    <a href="#" className='text-gradient text-sm' >{link}</a>
                    </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
    </section>
);
};

export default Services;
