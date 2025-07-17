import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

function App() {
  return (
      <>
        <Navbar />
        <About />
          <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
  );
}

export default App;
