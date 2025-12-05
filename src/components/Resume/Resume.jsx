import { useCallback, useState } from "react";
import Item from "./Item";
import { motion } from "framer-motion";
import "./Resume.model.css";

const Resume = () => {
  const [open, setOpen] = useState(false);
  function openNew() {
    window.open("https://github.com/hristinakovacevic/");
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const containerVariants = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.7,
      },
    },
  };
  let items = [
    {
      id: "e9ad3efe-5174",
      title: "Internship - Frontend Developer ",
      company: "Quantox Technology",
      date: "September 2021 - July 2022",
      text: [
        "Assisted in the development of web applications, gaining experience in HTML, CSS, and JavaScript.",
        "Started working with Figma to create and integrate design elements into web pages.",
        "Contributed to frontend development tasks with React.js and JavaScript.",
        "Implemented interactive features and optimized user interfaces for performance and accessibility.",
        " Integrated designs from Figma into web pages and worked with responsive design frameworks such as TailwindCSS, Material UI, and Chakra UI.",
        " Participated in code reviews and contributed to documentation.",
      ],
    },
    {
      id: "dcf8b688-5d38",
      title: "Frontend Developer ",
      company: "Serengeti d.o.o.",
      date: "August 2022 - July 2024",
      text: [
        " Developed and maintained complex frontend applications using React.js, React Native, and Angular.",
        " Collaborated with backend developers and designers to deliver scalable solutions for various projects.",
        "Managed state and created reusable components such as form and tables.",
      ],
    },
    {
      id: "dcf8b688-5d29",
      title: "Frontend Developer ",
      company: "Deep Thought Solutions d.o.o.",
      date: "January 2025 - Present",
      text: [
        " Developed modular React Native apps with structured project setup, navigation, and authentication features.",
        " Implemented state management, caching, and centralized authentication using React Query and Context.",
        "Built reusable UI components, hooks, utilities, and integrated frontend with backend via TypeScript and Zod schemas..",
      ],
    },
  ];

  return (
    <div className="cv__container">
      <motion.div
        className="tech__exp__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="cv__intro__container">
          <div className="cv__intro__title">
            <h1>Hristina Cirovic</h1>
            <h3>Frontend developer</h3>
          </div>

          <a
            href="/Resume.pdf"
            download="Hristina_Cirovic_Resume.pdf"
            className="a-wrap glow-link"
          >
            Download resume
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="cv__work-experience">
          <h2 className="cv__title">Work experience</h2>
          {items.map((item) => {
            return (
              <Item
                id={item.id}
                title={item.title}
                company={item.company}
                date={item.date}
                open={open === item.id}
                onToggle={() =>
                  setOpen((prev) => (prev === item.id ? null : item.id))
                }
                text={item.text}
              />
            );
          })}
        </motion.div>

        <motion.div className="cv__tech" variants={itemVariants}>
          <h2 className="cv__title">Technical Skills</h2>
          <ul>
            <li>HTML, CSS3 (Flexbox & Grid), JavaScript</li>
            <li>React.js (Hooks, Context API, Redux, Authentication: JWT)</li>
            <li>React Navigation</li>
            <li>React Native</li>
            <li>React Query (caching, refetching, server-state)</li>
            <li>ABAC for role-based access</li>
            <li>Chakra UI, Material UI, Tailwind CSS</li>
            <li>Git, GitHub, Jira, Postman</li>
            <li>Figma</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Resume;
