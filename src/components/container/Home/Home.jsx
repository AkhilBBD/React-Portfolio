import React from 'react'
import portfolio from "../../../assets/portfolio2.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'




const Home = () => {
    const moveVariants = {
      animation: {
        y: [0, -15],
        transition: {
          repeat: Infinity,
          repeatType:"reverse",
          duration: 2,
          delay: 1
        }
  
      }
    }
    return (
        <motion.div className="container " id='home'
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={
            {
              duration: 2,
              delay: 0.5
            }
          }
        >
        <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Akhil Pandey</span> </h3>
       
        <span className='text'>Passionate<br />  Software Developer  <br /> from India.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me</motion.a>
       
      </div>
    </motion.div>
  )
}

export default Home