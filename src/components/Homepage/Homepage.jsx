import "./Homepage.model.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMotionValue } from "framer-motion";

const Homepage = () => {
  function openInNewWindow() {
    window.open("https://todo-app-two-liard.vercel.app/");
  }
  function openEcoBloom() {
    window.open(
      "https://www.figma.com/design/ZvivImzDx4z1Eqc5uJkgw2/EcoBloom?node-id=1001-1130&t=HMBWmo5MM31QWBdv-1"
    );
  }

  const x = useMotionValue(30);
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
          <motion.div
            animate={{
              style: { x, rotate: 90, originX: 0.5 },
            }}
            className="homepage__picture"
          ></motion.div>
          <motion.circle
            animate={{ r: 10 }}
            onAnimationStart={(latest) => console.log(latest.r)}
          />
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
            <Link className="navbar_links" onClick={openEcoBloom}>
              Ecobloom
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
