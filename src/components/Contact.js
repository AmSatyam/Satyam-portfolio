import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
    }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
    });
    e.target.reset();
  };

  return (
    <section className='py-16 lg:section ' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get In Touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's Work <br /> together
              </h2>
            </div>
          </motion.div>
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            onSubmit={sendEmail}
            className='flex-1'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              name="name"
              placeholder='Your name'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="email"
              name="email"
              placeholder='Your email'
              required
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              name="message"
              placeholder='Your message'
              required
            ></textarea>
            <button className='btn btn-lg' type="submit">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
