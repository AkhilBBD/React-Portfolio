import React from 'react'
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import { downloadResume } from '../../../Data';
import portfolio from "../../../assets/portfolio.jpg"
import "./About.scss";


const About = () => {


    return (
      <div className="container " id='about'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="title">
          <span>Who Am I?</span>
          <h1>About Me</h1>
        </motion.div>

        <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
 <p> Dynamic Engineer, focused on continuous learning and proficient in spanning multiple programming languages and frameworks . With a passion for problem-solving , I am eager to collaborate with like-minded professionals for contribution in projects with real impact and seek out new challenges to push the boundaries of my technical abilities.</p>
 {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}

{/* //paste the Akhil Resume in download="" below */}

          <motion.a href = {downloadResume} target="#"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}


export default About