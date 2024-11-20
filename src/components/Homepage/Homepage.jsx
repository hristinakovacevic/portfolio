import React from "react";
import "./Homepage.model.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  function openInNewWindow() {
    window.open("https://todo-app-two-liard.vercel.app/");
  }
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="homepage__container">
          <div className="homepage__intro">
            <h1 className="homepage__name">Hristina Ćirovic</h1>
            <h3 className="homepage__profession">
              Frontend developer & UI/UX designer
            </h3>
            <p className="homepage__paragraf">
              Hello! I'm a frontend developer with strong passion for UX design.
              With a background in web technologies and attentive eye for
              user-centered design, I strive to create engaging and intuitive
              digital experience.
            </p>
          </div>
          <div className="homepage__picture"></div>
          <div className="project__container  ">
            <h2>Projects</h2>
            <Link className="navbar_links" onClick={openInNewWindow}>
              Todo app
            </Link>
            <Link className="navbar_links" to="/projects/cupshop">
              Cupshop
            </Link>
            <Link className="navbar_links" to="/projects/chat-app">
              Chat app
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
