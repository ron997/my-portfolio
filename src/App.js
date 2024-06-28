import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Certifications />
      <About />
      <Contact />
    </div>
  );
};

export default App;
