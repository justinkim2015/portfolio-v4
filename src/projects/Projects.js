import './projects.css'
import Project from './Project'
import karaoke from './images/karaoke.png'
import railsbook from './images/railsbook.png'
import chess from './images/chess.png'
import weather from './images/weather.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const projectsVariant = {
    visible: { opacity: 1, y: 0},
    hidden: { opacity: 0, y: 20},
  }  

  useEffect(() => {
    if(inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <section id='projects'>
      <div className="projects-header">
        <h2 className='projects-title'>My Projects</h2>
        <h6 className='projects-subtitle'>Click to find out more!</h6>
        <div className='underbar'></div>
      </div>

      <motion.div 
      ref={ref}
      variants={projectsVariant}
      transition={{ duration: 0.7}}
      initial="hidden"
      animate={control}         
      className='animation projects-container'>
        
        <Project
          image={karaoke}
          alt="Karaoke Planner Gif"
          title="Karaoke Planner"
          live="http://karaoke.justins-portfolio.live"
          git="https://github.com/justinkim2015/karaoke-song-organizer#karaoke-song-organizer"
        />

        <div className='underbar'></div>

        <Project
          image={railsbook}
          alt="RailsBook Gif"
          title="RailsBook"
          live="https://rails-book.onrender.com/"
          git="https://github.com/justinkim2015/social-media-clone#summary"
        />

        <div className='underbar'></div>

        <Project
          image={weather}
          alt="Weather App screenshot"
          title="iPad Weather App"
          live="https://justinkim2015.github.io/ipad-weather-app/"
          git="https://github.com/justinkim2015/ipad-weather-app"
        />

        <div className='underbar'></div>

        <Project
          image={chess}
          alt="Chess screenshot"
          title="Two-Player CLI Chess"
          live="https://github.com/justinkim2015/chess#summary"
          git="https://github.com/justinkim2015/chess#summary"
        />
      </motion.div>
    </section>
  )
}

export default Projects