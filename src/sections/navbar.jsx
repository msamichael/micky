import { useState } from "react";
import michael from "../assets/michael3.png"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    
      <nav>
        <h2>
          micky<span>.</span>co
        </h2>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>
          <li>
            <a href="#project" onClick={closeMenu}>Project</a>
          </li>
          <li>
            <a href="#certificates" onClick={closeMenu}>Certificates</a>
          </li>
        </ul>

        <div className="nav-right">
          <img src={michael} alt="michael anifowose" />
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </nav>
    
  );
};

export default Navbar;
