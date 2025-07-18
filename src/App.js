import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import DetailsGestionCinema from "./Components/DetailsGestionCinema";
import DetailsFoodApp from "./Components/DetailsFoodApp";
import DetailsGestionStagiaire from "./Components/DetailsGestionStagiaire";
import React from "react";
import DetailsMovieStore from "./Components/DetailsMovieStore";
import DetailsGitlabCI from "./Components/DetailsGitlabCI";

function App() {
  return (
      <>
        <Navbar />
        <About />
          <Skills />
        <Projects />
          <DetailsGestionCinema />
          <DetailsFoodApp />
          <DetailsGestionStagiaire />
          <DetailsMovieStore />
          <DetailsGitlabCI />

          <Contact />
        <Footer />
      </>
  );
}

export default App;
