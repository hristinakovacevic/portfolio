import React from "react";
import "./ChatApp.model.css";
import figmaChat from "../../../assets/figma-chatapp.png";

const ChatApp = () => {
  function openNew() {
    window.open(
      "https://www.figma.com/proto/xBlLDmANsclj3kXhPRrCLD/Chat-App?page-id=0%3A1&node-id=30-134&node-type=frame&viewport=1649%2C4108%2C0.43&t=dgzc6N1NbFOXJ1m3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=30%3A134&show-proto-sidebar=1"
    );
  }

  return (
    <div className="container">
      <div className="content__container cupshop__container">
        <div className="chatapp-wrap">
          <div className="chatapp-img__container">
            <img
              src={figmaChat}
              className="chatapp-img"
              alt="preview chat app"
              onClick={openNew}
            />
          </div>
          <div className="text__container">
            <div>
              <h2>Project overview</h2>
              <p>
                The Minimalist Chat App is designed for individuals who prefer a
                streamlined messaging experience.
                <br />
                This app focuses on keeping things simple. It allows users to
                keep only their closest contacts, reducing clutter and
                conserving device memory.
              </p>
            </div>
            <div>
              <h2>User-Centered Interface</h2>
              <p>
                The chat interface is intuitive, with accessible conversation
                windows, clear message bubbles, and minimal navigation to ensure
                a smooth user-friendly experience.
              </p>
            </div>
            <div>
              <h2>Minimalist Design</h2>
              <p>
                The app’s interface is clean, user-friendly, and designed to
                prioritize simplicity and functionality over excessive features.
                The focus is on essential messaging without distractions.
              </p>
            </div>
            <div>
              <h2>Target Audience</h2>
              <p>People with limited storage space</p>
              <p>Users who prefer simplicity </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
