import React from "react";

import { Link } from "react-router-dom";
import "./Projects.model.css";

const Projects = () => {
  function openInNewWindow() {
    window.open("https://todo-app-two-liard.vercel.app/");
  }

  return (
    <>
      <div className="project__container-mob  ">
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
    </>
  );
};

export default Projects;
