import React from 'react'
import { motion } from 'framer-motion'
import cute from "../../assets/cute.png"

const Contact = () => {
  return (
   <section className='contact'>
  <motion.form
  initial={{
    x:"-100",
    opacity:0
  }}
  animate={{
    x:0,
    opacity:1
  }}
  transition={{delay:0.2}}
  >
  <input type='text' placeholder='Name'></input>
  <input type='email' placeholder='Email'></input>

  <textarea placeholder='Message...' cols="30" rows="10"></textarea>

  <button type='submit' > Send</button>
  </motion.form>

  <motion.div className='formBorder'
  initial={{
    x: "100vh",
    opacity:0
  }}
  animate={{
    x:0,
    opacity:1
  }}
  transition={{delay:0.2}}
  >
  <motion.div 
  initial={{
    y: "-100vh",
    x: "50%",
    opacity: 0
  }}
  animate={{
    y: "-50%",
    x: "50%",
    opacity:1
    
  }}
  transition={{delay:1}}
  >
    <img src={cute} alt='Pic' />
  </motion.div>
  </motion.div>
   </section>
  )
}

export default Contact