import React from "react";
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
            Hi, I’m Michael. I'm a <span> frontend developer</span> who enjoys turning ideas
            into clean, functional websites and apps.
          </p>
          <p>
            I like building modern, responsive interfaces that
            feel intuitive and easy to use.
            </p>
          <p>
            I’m always learning and improving, whether it’s picking up a
            new framework or thinking more deeply about how small details affect the overall product.
          </p>
          <p>
            I care about writing clear, maintainable code and enjoy solving different kind of problems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
