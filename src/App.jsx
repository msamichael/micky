import React from 'react';
import Navbar from './sections/navbar';
import Hero from './sections/Hero';
import Skill from './sections/Skill';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>

      <Hero/>
      <Skill/>
      <Projects/>
      </main>
      <Footer/>
      </div>
  )
}

export default App