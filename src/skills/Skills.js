import './skills.css'
import front from './front.png'
import back from './back.png'
import tool from './tool.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const skillsVariant = {
    visible: { opacity: 1, x: 0 },
    hiddenLeft: { opacity: 0, x: 100 },
    hiddenRight: { opacity: 0, x: -80},
    hiddenFade: { opacity: 0, x: 0},
  }  

  useEffect(() => {
    if(inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <section id='skills'>
      <div className="skills-header">
        <h2 className='skills-title'>Skills</h2>
        <h6 className='skills-subtitle'>My core competencies and things I do.</h6>
        <div className='underbar'></div>
      </div>

      <div className='skills-container'>
        <motion.div
        ref={ref}
        variants={skillsVariant}
        transition={{ duration: 0.4}}
        initial="hiddenLeft"
        animate={control}
        className='frontend'>
          <div className='circle'><img src={front} className='skill-icon' alt='frontend graphic'></img></div>
          <h3 className='skill-title'>Front-end Development</h3>
          <ul className='skill-list'>
            <li className='skill'>JavaScript</li>
            <li className='skill'>HTML5</li>
            <li className='skill'>CSS3</li>
            <li className='skill'>ReactJS</li>
          </ul>
        </motion.div>
        <motion.div
        ref={ref}
        variants={skillsVariant}
        transition={{ duration: 0.4, delay: 0.1}}
        initial="hiddenRight"
        animate={control}
        className='backend'>
          <div className='circle'><img src={back} className='skill-icon' alt='backend graphic'></img></div>
          <h3 className='skill-title'>Back-end Development</h3>
          <ul className='skill-list'>
            <li className='skill'>Ruby & Ruby on Rails</li>
            <li className='skill'>PostgreSQL</li>
            <li className='skill'>JavaScript</li>
            <li className='skill'>RSpec</li>
            <li className='skill'>Minitest</li>
          </ul>
        </motion.div>
        <motion.div
        ref={ref}
        variants={skillsVariant}
        transition={{ duration: 0.4, delay: 0.2}}
        initial="hiddenLeft"
        animate={control}
        className='dev'>
          <div className='circle'><img src={tool} className='skill-icon' alt='skills graphic'></img></div>
          <h3 className='skill-title'>Development Tools</h3>
          <ul className='skill-list'>
            <li className='skill'>Git & Github</li>
            <li className='skill'>VSCode</li>
            <li className='skill'>Webpack</li>
            <li className='skill'>Linux</li>
            <li className='skill'>Dokku</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills