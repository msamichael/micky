import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="home" id="home">
      <div 
        className="intro"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 1 - scrollY / 500
        }}
      >
        <div className="intro-text">
          <h2 className="gradient-text">Michael</h2>
          <h2 className="gradient-text">Anifowose</h2>
        </div>
        <div className="about">
          <p style={{fontSize:'22px'}}> 
Frontend developer.</p>
<p>
 I build fast, thoughtful interfaces </p>
<p>Right now I'm focused on the intersection of web development and AI</p>
          <p>
            I care about the craft - clean components, good architecture, and products that actually work.</p>
        </div>
        <button className="cta-button" onClick={scrollToProjects}>
          View My Work
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
