import React from "react";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>© Michael Anifowose 2026</h4>

      <div className="footer-links">
        <a href="mailto:mickeyfowose@gmail.com">
          <FiMail size={25} />
        </a>
        <a
          href="http://github.com/msamichael"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-plain"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/michael-a-481617220/
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
