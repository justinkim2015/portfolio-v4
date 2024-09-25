import './navbar.css'
import hamburger from './black-hamburger.png'
import jk from './jk.png'

const Navbar = () => {
  const toggle = () => {
    let hamburger = document.querySelector('#menu')
    hamburger.classList.toggle('hamburger-menu-active')    
    hamburger.classList.toggle('hamburger-menu-inactive')    
  }

  return (
    <nav id='navbar'>
      <div className='nav-mobile'>
        <a href="#"><img src={jk} className='logo' alt='jk logo'></img></a>
        <img src={hamburger} className='hamburger-button' onClick={toggle} alt='hamburger button'></img>
        <ul id='menu' className='hamburger-menu-inactive hamburger-menu'>
          <a href="#" className='link'>Home</a>
          <a href="#about" className='link'>About</a>
          <a href="#skills" className='link'>Skills</a>
          <a href="#projects" className='link'>Projects</a>
          <a href="#contact" className='link'>Contact</a>
        </ul>
      </div>

      <div className='nav-desktop'>
        <ul id='menu' className='desktop-links'>
          <a href="#"><img src={jk} className='logo' alt='JK logo'></img></a>
          <ul className='link-container'>
            <a href="#" className='link'>Home</a>
            <a href="#about" className='link'>About</a>
            <a href="#skills" className='link'>Skills</a>
            <a href="#projects" className='link'>Projects</a>
            <a href="#contact" className='link'>Contact</a>
          </ul>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar