import React from "react";
import cv from "../../assets/hristina-cirovic-cv.png";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./Resume.model.css";

const Resume = () => {
  function openNew() {
    window.open("https://github.com/hristinakovacevic/");
  }
  let internship = {
    id: "e9ad3efe-5174",
    title: "Internship - Frontend Developer, Quantox Technology ",
    date: "September 2021 - February 2022",
    text: [
      "Assisted in the development of web applications, gaining experience in HTML, CSS, and JavaScript.",
      "Started working with Figma to create and integrate design elements into web pages.",
    ],
  };

  let developerAtQ = {
    id: "e9ad3efe-5225",
    title: "Frontend Developer, Quantox Technology",
    date: "March 2022 - July 2022",
    text: [
      "Contributed to frontend development tasks with React.js and JavaScript.",
      "Implemented interactive features and optimized user interfaces for performance and accessibility.",
      " Integrated designs from Figma into web pages and worked with responsive design frameworks such as TailwindCSS, Material UI, and Chakra UI.",
      " Participated in code reviews and contributed to documentation.",
    ],
  };
  let developerAtS = {
    id: "dcf8b688-5d38",
    title: "Frontend Developer, Serengeti d.o.o.",
    date: "August 2022 - July 2024",
    text: [
      " Developed and maintained complex frontend applications using React.js, React Native, and Angular.",
      " Collaborated with backend developers and designers to deliver scalable solutions for various projects.",
      "Managed state and created reusable components such as form and tables.",
    ],
  };
  return (
    <div className="container">
      <div className="content__container">
        <div className="cv__container">
          <div className="cv__intro">
            <div className="cv__intro__title">
              <h1>Hristina Cirovic</h1>
              <h3>Frontend developer</h3>
            </div>
            <a
              href="/Resume.pdf"
              download="Hristina_Cirovic_Resume.pdf"
              className="a-wrap"
            >
              <span className="hover-download">Download resume</span>
            </a>
          </div>{" "}
          <div className="tech__exp__container">
            <div className="cv__work-experience">
              <h2 className="cv__title">Work experience</h2>

              <Item
                id={internship.id}
                title={internship.title}
                date={internship.date}
                text={internship.text}
              />
              <Item
                id={developerAtQ.id}
                title={developerAtQ.title}
                date={developerAtQ.date}
                text={developerAtQ.text}
              />
              <Item
                id={developerAtS.id}
                title={developerAtS.title}
                date={developerAtS.date}
                text={developerAtS.text}
              />
            </div>

            <div className="cv__tech">
              <h2 className="cv__title">Technical Skills</h2>
              <ul>
                <li>HTML, CSS3 (Flexbox & Grid), JavaScript</li>
                <li>
                  React.js (Hooks, Context API, Redux, Authentication: JWT)
                </li>
                <li>React Native</li>
                <li>Angular (two-way data binding, directives)</li>
                <li>Chakra UI, Material UI, TailwindCSS</li>
                <li>Git, GitHub, Jira, Postman</li>
                <li>Figma, Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
