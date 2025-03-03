import React from 'react';
import Image from '../assets/satyii.png'
import {FaGithub, FaInstagram, FaLinkedinIn , FaTwitter} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

//link
import { Link } from 'react-scroll';




const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home' >
      <div className="container mx-auto ">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12' >
          {/* Text */}
          <div className='flex-1 text-center font-secondary lg:text-left' >
            <motion.h1
             variants = {fadeIn('up',0.3)}
             initial='hidden'
              whileInView={'show'}
               viewport={{once: false, amount: 0.7}} 
               className='text-[45px] font-bold leading[0.8] lg-text-[110px]' >
              SATYAM  </motion.h1>
            <motion.div variants = {fadeIn('up',0.5)}
             initial='hidden'
              whileInView={'show'}
               viewport={{once: false, amount: 0.7}} 
            
            className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]' >
              <span className=' text-white mr-4' >I am</span>
              <TypeAnimation
               sequence={[
                'Engineer ',
                2000,
                'Designer ',
                2000,
                'Developer ',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
             />
            </motion.div>
            <motion.p variants = {fadeIn('up',0.6)}
             initial='hidden'
              whileInView={'show'}
               viewport={{once: false, amount: 0.7}} 
                className='mb-8 max-w-lg mx-auto lg:mx-0' >
              Frontend developer dedicated to crafting responsive, user-friendly web app using the latest technologies. <br /> 
              <p className='ml-6 text-pink-400 font-semibold' ><a href="mailto:satyamsaurav2001@gmail.com"> satyamsaurav2001@gmail.com</a> <br />
              <a href="tel:8743939829">@ Call Me</a></p>
              </motion.p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 ' >
              <button className='btn btn-lg' > 
                <Link to= 'contact'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              > Contact Me</Link>
               </button>
              <a href="/Resume-SatyamSaurav.pdf" className='text-gradient btn-link' target='_blank' >
                My Portfolio
                </a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0' >
              <a href="https://in.linkedin.com/in/contact-satyam-saurav">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/_m_satyam/">
              <FaInstagram />
              </a>
              <a href="https://x.com/Satyam28105787">
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* Image */}
          <motion.div 
              variants = {fadeIn('down',0.7)}
              initial='hidden'
              whileInView={'show'}
           className='hidden lg:flex flex-1 max-w-[420px] mix-blend-lighten lg:max-w-
          [482px]' >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
