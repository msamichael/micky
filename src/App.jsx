import React from 'react';
import Navbar from './sections/navbar';
import Hero from './sections/Hero';
import Skill from './sections/Skill';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Footer from './sections/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar/>
      <main>

      <Hero/>
      <Skill/>
      <Projects/>
      <Certificates/>
      </main>
      <Footer/>
      <Analytics/>
      </>
  )
}

export default App