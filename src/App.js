import React from 'react';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import { ThemeContextProvider } from '../src/context/ThemeContext';
import './styles/main.scss';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
