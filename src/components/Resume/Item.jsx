import { motion, AnimatePresence } from "framer-motion";
import "./Resume.model.css";

const Item = ({ title, company, date, text, open, onToggle }) => {
  return (
    <div className="cv__item">
      <div className="cv__item-header" onClick={onToggle}>
        <h3>{title}</h3>
        <h5>{company}</h5>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              overflow: "hidden",
            }}
            className="cv__item-content"
          >
            <div>{date}</div>
            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {text.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Item;
