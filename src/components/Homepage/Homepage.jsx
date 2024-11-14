import React from "react";
import "./Homepage.model.css";
import Projects from "../Projects/Projects";

const Homepage = () => {
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
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
