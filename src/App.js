import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import About from './about/About.js'
import Skills from './skills/Skills.js'
import Projects from './projects/Projects.js'
import Contact from './contact/Contact.js'
import Footer from './footer/Footer'

function App() {
  return (
    <div>
      <div id="content">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
