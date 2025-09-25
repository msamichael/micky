import React from "react";
// import micky from "../assets/micke1.png";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="intro">
        <div className="intro-text">
          <h2>Michael</h2>
          <h2>Anifowose</h2>
        </div>
        <div className="about">
          <p>
            Hi, I’m Michael. I'm a <span> frontend developer</span> who enjoys
            building clean, functional websites and apps.
          </p>
          <p>
            I specialize in creating modern, intuitive interfaces that
            prioritize usability and enhance the overall user experience.
          </p>
          <p>
            I’m always learning and trying to improve, whether it’s picking up a
            new framework or refining my design skills.
          </p>
          <p>
            I care about writing code that’s organized and maintainable, and I
            enjoy solving problems through thoughtful design.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
