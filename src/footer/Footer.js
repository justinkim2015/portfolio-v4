import './footer.css'
import github from '../logos/github-white.png'
import linkedin from '../logos/linkedin-white.png'
import logo from './main-logo-white.png'

const Footer = () => {
  return (
    <section id='footer'>
      <img src={logo} className='footer-logo' alt='JK logo'></img>
      <div className='icon-bar'>
        <a href="https://github.com/justinkim2015" className='icon-holder'><img src={github} className='social-icon' alt='github logo'></img></a>

        <a href="https://www.linkedin.com/in/justin-kim-809612ba/" className='icon-holder'><img src={linkedin} className='social-icon' alt='linkedin logo'></img></a>
      </div>
      <p className='inspired-by'><i>Inspiration from blazethemes.com</i></p>
      <p className='made-by'>Created by Justin Kim, 2023</p>
    </section>
  )
};

export default Footer