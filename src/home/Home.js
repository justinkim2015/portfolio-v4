import './home.css'
import github from '../logos/github-white.png'
import linkedin from '../logos/linkedin-white.png'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id='home'>
      <div id='banner-content'>
        <motion.div
        animate={{opacity: 1, y: 0, transition: {duration: 0.6}}}
        initial={{opacity: 0, y: 10}} 
        className='banner-text'
        >
          <h2 className='hello'>Hi there,</h2>
          <p className='name'>I'm Justin Kim.</p>
          <p className='my-desc'>Full-stack web developer</p>
        </motion.div>
        
        <div className='icon-bar'>
          <a href="https://github.com/justinkim2015" className='icon-holder'><img src={github} className='social-icon' alt='github logo'></img></a>

          <a href="https://www.linkedin.com/in/justin-kim-809612ba/" className='icon-holder'><img src={linkedin} className='social-icon' alt='linkedin logo'></img></a>
        </div>
      </div>
    </section>
  )
}

export default Home