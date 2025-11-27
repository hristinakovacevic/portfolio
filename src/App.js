import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Cupshop from "./components/Projects/Cupshop/Cupshop";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import ChatApp from "./components/Projects/ChatApp/ChatApp";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/cupshop" element={<Cupshop />} />
          <Route path="/projects/chat-app" element={<ChatApp />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
