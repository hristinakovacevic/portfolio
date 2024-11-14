import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.model.css";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/hamburger-menu.svg";
import githubLogo from "../../assets/github-logo.svg";
import linkedIn from "../../assets/linkedin.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }
  function openGithhub() {
    window.open("https://github.com/hristinakovacevic/");
  }
  function openLinkedin() {
    window.open(
      "https://www.linkedin.com/in/hristina-%C4%87irovi%C4%87-016baab1/"
    );
  }
  return (
    <>
      <div className="navbar__container">
        <Link to="/home">
          <img src={logo} className="logo" alt="logo" />
        </Link>

        <ul className="navbar__tabs">
          <Link className="navbar_links" to="/home">
            home
          </Link>
          <Link className="navbar_links" to="/resume">
            resume
          </Link>

          <Link className="navbar_links" to="/contact">
            contact
          </Link>
        </ul>
        <div className="social-media__container ">
          <img src={githubLogo} alt="github logo" onClick={openGithhub} />
          <img src={linkedIn} alt="linkedIn logo" onClick={openLinkedin} />
        </div>
        <Link onClick={openMenu}>
          <img
            src={hamburger}
            className=" hamburger-menu"
            alt="hamburger menu"
          />
        </Link>
      </div>
      {isOpen && (
        <div className="navbar__container__mobile">
          <ul className="navbar__tabs__mobile">
            <Link className="navbar_links" to="/home" onClick={openMenu}>
              home
            </Link>
            <Link className="navbar_links" to="/resume" onClick={openMenu}>
              resume
            </Link>

            <Link className="navbar_links" to="/contact" onClick={openMenu}>
              contact
            </Link>
            <div className="social-media-mobile">
              <img src={githubLogo} alt="github logo" />
              <img src={linkedIn} alt="linkedIn logo" />
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
