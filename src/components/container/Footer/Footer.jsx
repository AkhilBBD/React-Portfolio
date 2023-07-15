import React from 'react';
import "./Footer.scss"


import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="message">
        <p>Visit Again!</p>
        
      </div>
      
    </motion.div>
  )
}

export default Footer