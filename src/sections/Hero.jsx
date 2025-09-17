import React from "react";
import micky from "../assets/micke1.png";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="intro">
        <div className="intro-text">
          <h2>Michael</h2>
          <h2>Anifowose</h2>
        </div>

        <img src={micky} alt="Michael Anifowose" />
      </div>
      <p>
        Hi, I’m Michael. I'm a frontend developer who enjoys building clean,
        functional websites and apps.
      </p>
      <p>
        I specialize in creating modern, intuitive interfaces that prioritize
        usability and enhance the overall user experience.  I’m always learning and trying to improve, whether it’s
      picking up a new framework or refining my design skills.
      </p>
      <p>

       I care about writing code that’s organized and maintainable, and I enjoy solving
      problems through thoughtful design.
      </p>
      <p>

      </p>
    </section>
  );
};

export default Hero;
