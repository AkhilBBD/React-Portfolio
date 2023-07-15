import React, { useState } from 'react'
import "./Skills.scss";
import { educations, icons } from '../../../Data';
import { education } from '../../../Data';
import { achievements } from '../../../Data';
import { motion } from 'framer-motion';
const Skills = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="container" id="skills">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}  
        className="title"
      >
        <span>What I Expert?</span>
        <h1>Skills And Education</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>Skills</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >Education</button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="skills"
      >
        {active === 1 && icons.map((icon, index) => {
          return (
            <div key={index} className="tools" >
              {icon}
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="educationss"
      >
        {active === 2 && educations.map(education => {
          return (
            <div className="education" key={education.id}>
              <span>{education.year}</span>
              <div className="pursuing">
                <h3>{education.pursuing}</h3>
                <p>{education.institute}</p>
              </div>
            </div>
          )
        })}
        </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="achievements_container"
      >
        {achievements.map(achievement => {
        return (
          <div className='achievements' key={achievement.id}>
            <div className='number'>{achievement.number}</div>
            <h4 className='item_name'>{achievement.itemName }</h4>
          </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Skills